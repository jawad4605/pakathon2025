"use client";

import { useState } from "react";

export default function Resources() {
    const [username, setUsername] = useState("");
    const [connectionString, setConnectionString] = useState("");

    async function createDb() {
        if (!username) {
            alert("Please enter a username");
            return;
        }
        setConnectionString("⏳ Creating database...");
        try {
            const res = await fetch("/api/create-user-db", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName: username }),
            });
            const data = await res.json();
            if (data.connectionString) {
                setConnectionString(data.connectionString);
            } else {
                setConnectionString("❌ Error: " + (data.error || "Unknown"));
            }
        } catch (err: any) {
            setConnectionString("❌ Error: " + err.message);
        }
    }

    return (
        <div className="container">
            <nav className="nav">
                <div className="logo">
                    <img src="/assets/logo.webp" alt="Pakathon 2025 logo" />
                    Resources & Projects
                </div>
                <a className="btn-outline" href="/">Back to Home</a>
            </nav>

            {/* DB Generator */}
            <section id="db" className="section">
                <div className="card">
                    <h3>🔗 Database Connection</h3>
                    <p className="sub">Enter a username to generate your Neon Postgres connection string:</p>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            padding: "10px",
                            borderRadius: "8px",
                            width: "100%",
                            marginBottom: "12px",
                            background: "#0e1a28",
                            color: "#fff",
                            border: "1px solid #23425a"
                        }}
                    />
                    <button className="btn" onClick={createDb}>Generate</button>
                    <pre style={{
                        marginTop: "20px",
                        background: "#0f1728",
                        padding: "12px",
                        borderRadius: "8px",
                        color: "#22d3ee"
                    }}>
                        {connectionString}
                    </pre>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="section grid">
                <div className="card">
                    <h3>📂 Build a Viral MBTI Personality Assessment</h3>
                    <p>MBTI test & scoring engine for VieroMind.com.</p>
                    <a className="btn" target="_blank" rel="noopener"
                        href="https://drive.google.com/drive/folders/1SLEcXGBv4ECQLo0yNjTHsNn-aCT7sP9Z?usp=sharing">
                        View Project
                    </a>
                </div>

                <div className="card">
                    <h3>📂 Therapist Finder Prototype</h3>
                    <p>Searchable therapist directory for Pakistani users.</p>
                    <a className="btn" target="_blank" rel="noopener"
                        href="https://drive.google.com/drive/folders/1VG3zIlfCjIWXIpb914ErHYUhjn4sU8__?usp=sharing">
                        View Project
                    </a>
                </div>

                <div className="card">
                    <h3>📂 Multi-AI Chat Demo (Lite Version)</h3>
                    <p>A demo for experimenting with multiple AI chat agents.</p>
                    <a className="btn" target="_blank" rel="noopener"
                        href="https://drive.google.com/drive/folders/1A2S0Tp_1CwrHDcUIgoV00lKtFy_VlKhM?usp=sharing">
                        View Project
                    </a>
                </div>

                {/* New Project: PalmPilot */}
                <div className="card">
                    <h3>📂 PalmPilot – Read My Palm</h3>
                    <p>
                        Upload your palm photo, get insights from the VieroMind Palm API,
                        and share your results with beautiful, locally inspired visuals.
                    </p>
                    <a className="btn" target="_blank" rel="noopener"
                        href="https://drive.google.com/drive/folders/1sdV3GC55ymDbaI_xUea9o-9aUYtufPeh?usp=sharing">
                        View Project
                    </a>
                </div>
            </section>

            {/* OpenAI API */}
            <section className="section">
                <div className="card">
                    <h3>🔑 OpenAI API Resource</h3>
                    <p>Download credentials & starter kit for integration.</p>
                    <a className="btn" target="_blank" rel="noopener"
                        href="https://docs.google.com/document/d/12x1VyBt6I_NHo3QagFjCWD1gmZa3yD6cOb8hP431NNY/edit?usp=sharing">
                        Download API File
                    </a>
                </div>
            </section>

            {/* Submission Button */}
            <section className="section">
                <div className="card" style={{ textAlign: "center" }}>
                    <h3>✅ Submit Your Final Project</h3>
                    <p className="sub">Submit your project through the Google Form below:</p>
                    <a className="btn"
                        style={{ fontSize: "1.2rem", padding: "14px 28px" }}
                        target="_blank" rel="noopener"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdmvdZOk8usuhpMi2VbB4F_AHZxJP907RxJkeMVQmLFj7kSoA/viewform">
                        Submit Project
                    </a>
                </div>
            </section>

            <footer className="footer">
                © 2025 Pakathon · A VieroMind initiative · Lahore, Pakistan
            </footer>
        </div>
    );
}
