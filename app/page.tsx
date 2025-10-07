export default function Home() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="nav">
        <div className="logo">
          <img src="/assets/logo.webp" alt="Pakathon 2025 logo" />
          VieroMind Pakathon 2025
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <a className="btn-outline" href="#details">Details</a>
          <a className="btn" target="_blank" rel="noopener"
            href="https://forms.gle/6GfF22Rjk1vGuv4K8">Register Now</a>
          <a className="btn-outline" href="/resources">Resources</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div>
          <span className="pill">We are coming to Multan</span>
          <h1>Build. Innovista. Heal.</h1>
          <p className="sub">
            A 30-hour hackathon in Lahore to create AI tools for mental wellbeing.
            Join developers, designers, and founders to prototype real solutions and win prizes, mentorship, and interviews.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "20px" }}>
            <a className="btn" target="_blank" rel="noopener"
              href="https://forms.gle/6GfF22Rjk1vGuv4K8">Register Now</a>
            <a className="btn-outline" href="#tracks">View Tracks</a>
          </div>
          <div className="kpis">
            <div className="kpi"><div className="n">50–80</div><div>Participants</div></div>
            <div className="kpi"><div className="n">₨ 100k+</div><div>Prizes</div></div>
            <div className="kpi"><div className="n">30 hrs</div><div>Hacking</div></div>
          </div>
        </div>
        <div className="hero-art">
          <img src="/assets/hero.jpg" alt="Developers collaborating" />
          <div className="overlay"></div>
          <div className="overlay-text">Join Pakistan's brightest builders to launch a localized version of VieroMind.</div>
        </div>
      </header>

      {/* Details Section */}
      <section id="details" className="section grid">
        <div className="card">
          <h3>Venues & Dates</h3>
          <ul className="list">
            <li>✅ <b>Lahore:</b> Oct 3rd–4th, 2025 (Completed) — Innovista DHA Business Hub Auditorium</li>
            <li>🟡 <b>Multan:</b> Oct 13th–14th, 2025 (Tentative) — Venue TBA</li>
            <li>🔵 <b>Islamabad:</b> Coming Soon — Dates to be announced</li>
          </ul>
        </div>

        <div className="card">
          <h3>Who Should Join</h3>
          <ul className="list">
            <li>👩‍💻 Developers (Web, Mobile, ML)</li>
            <li>🎨 Designers (UI/UX)</li>
            <li>🧭 Product / Data folks</li>
          </ul>
        </div>
        <div className="card">
          <h3>What You’ll Get</h3>
          <ul className="list">
            <li>🏆 Prizes & sponsor swag</li>
            <li>🧑‍🏫 Mentorship & hiring fast-track</li>
            <li>🌍 Impact: tools for mental wellbeing</li>
          </ul>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="section">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>The Challenge</h3>
          <p>
            Convert the existing VieroMind platform into a Pakistani version — localized,
            mobile-first, and connected to local helplines and therapist directories.
            Full repo access and API keys will be provided at kickoff.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "12px" }}>
            <span className="pill">Therapy Chat Assistants</span>
            <span className="pill">Journaling & Mood Tracking</span>
            <span className="pill">Crisis Links & Helplines</span>
            <span className="pill">Therapist Directories</span>
            <span className="pill">Mobile-first Wellness</span>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="section">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Event Rules & Guidelines</h3>
          <ul className="list">
            <li>🛡️ Follow the code of conduct: Respect all participants.</li>
            <li>👤 Solo participation only; no teams allowed.</li>
            <li>💻 All code must be written during the event (except provided repo).</li>
            <li>📂 Repo name format: "[participant-name]-vieromind".</li>
            <li>🛠️ Use any stack, ensure compatibility with VieroMind base.</li>
            <li>📝 Submission: demo video + README with setup instructions.</li>
            <li>⚖️ Judging: innovation, impact, technical execution, presentation.</li>
          </ul>
        </div>
      </section>

      {/* Schedule + Sponsors Section */}
      <section className="section grid">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Schedule (Lahore)</h3>
          <ul className="list">
            <li><b> 9:00</b> Check-in</li>
            <li><b> 10:00</b> Keynote & challenge reveal</li>
            <li><b> 11:00</b> Competition starts</li>
            <li><b> 12:00</b> Submissions close</li>
            <li><b> 15:00</b> Awards & sponsor mixer</li>
          </ul>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Sponsors & Partners</h3>
          <p className="sub">Interested in sponsoring? Email <a href="mailto:info@vieromind.com">info@vieromind.com</a></p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Register</h3>
          <p>Spots are limited. Click below to complete the Google Form.</p>
          <a className="btn" target="_blank" rel="noopener"
            href="https://forms.gle/6GfF22Rjk1vGuv4K8">Register Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 Pakathon · A VieroMind initiative · Lahore, Multan, Islamabad
      </footer>
    </div>
  );
}
