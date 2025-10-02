import { NextRequest, NextResponse } from "next/server";
const NEON_API_BASE = "https://console.neon.tech/api/v2";
const PROJECT_ID = process.env.NEON_PROJECT_ID!;
const NEON_API_KEY = process.env.NEON_API_KEY!;
const DEFAULT_DB_URL = process.env.DATABASE_URL!;
function parseOwnerCreds(dbUrl: string) {
  const u = new URL(dbUrl);
  return { username: decodeURIComponent(u.username), password: decodeURIComponent(u.password), query: u.search || "?sslmode=require" };
}
async function neonRequest(path: string, method = "GET", body?: any) {
  const resp = await fetch(`${NEON_API_BASE}${path}`, {
    method,
    headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${NEON_API_KEY}` },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) throw new Error(`Neon API error ${resp.status}: ${JSON.stringify(data)}`);
  return data;
}
async function waitForBranchReady(branchId: string) {
  for (let i = 0; i < 15; i++) {
    const res = await neonRequest(`/projects/${PROJECT_ID}/branches/${branchId}`);
    const branch = res?.branch;
    if (branch?.current_state === "ready") {
      const endpointsRes = await neonRequest(`/projects/${PROJECT_ID}/branches/${branchId}/endpoints`);
      if (endpointsRes?.endpoints?.length > 0) { branch.endpoints = endpointsRes.endpoints; return branch; }
    }
    await new Promise(r => setTimeout(r, 2000));
  }
  throw new Error("Branch or endpoints did not become ready in time");
}
async function getBranchByName(branchName: string) {
  const res = await neonRequest(`/projects/${PROJECT_ID}/branches?name=${encodeURIComponent(branchName)}`);
  return res.branches?.[0];
}
async function getOrCreateBranch(branchName: string) {
  try {
    const res = await neonRequest(`/projects/${PROJECT_ID}/branches`, "POST", { branch: { name: branchName }, endpoints: [{ type: "read_write" }] });
    return res.branch;
  } catch (err: any) {
    if (String(err.message).includes("already exists")) return await getBranchByName(branchName);
    throw err;
  }
}
async function getOrCreateDatabase(branchId: string, dbName: string, ownerName: string) {
  try {
    const res = await neonRequest(`/projects/${PROJECT_ID}/branches/${branchId}/databases`, "POST", { database: { name: dbName, owner_name: ownerName } });
    return res.database;
  } catch (err: any) {
    if (String(err.message).includes("already exists")) {
      const databases = await neonRequest(`/projects/${PROJECT_ID}/branches/${branchId}/databases`);
      return databases.databases?.find((db: any) => db.name === dbName);
    }
    throw err;
  }
}
async function getReadWriteEndpoint(branch: any) {
  const rw = (branch.endpoints || []).find((e: any) => e.type === "read_write");
  if (rw) return rw; throw new Error("No read_write endpoint found for branch");
}
export async function POST(req: NextRequest) {
  try {
    const { userName } = await req.json();
    if (!userName) return NextResponse.json({ error: "Missing userName" }, { status: 400 });
    const safe = String(userName).toLowerCase().replace(/\W+/g, "_").slice(0, 48);
    const branchName = `user_${safe}`; const dbName = `db_${safe}`;
    const { username: ownerName, password, query } = parseOwnerCreds(DEFAULT_DB_URL);
    const branch = await getOrCreateBranch(branchName);
    const readyBranch = await waitForBranchReady(branch.id);
    const db = await getOrCreateDatabase(readyBranch.id, dbName, ownerName);
    const endpoint = await getReadWriteEndpoint(readyBranch);
    const connectionString = `postgresql://${encodeURIComponent(ownerName)}:${encodeURIComponent(password)}@${endpoint.host}/${dbName}${query}`;
    return NextResponse.json({ message: "Branch & DB ready", branch: { id: readyBranch.id, name: branchName }, database: db, connectionString });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
  }
}
