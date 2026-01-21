import { useNavigate } from "react-router-dom";

export default function PublicAI() {
  const navigate = useNavigate();

  return (
    <section className="screen public-screen active">
      <header className="topbar topbar-public">
        <div className="topbar-logo">J.A.I SETHU</div>
        <button className="topbar-action" onClick={() => navigate("/public")}>
          Dashboard
        </button>
      </header>

      <div className="subscreen-wrap">
        <h2>AI Legal Guidance</h2>
        <p className="muted">
          No conversations yet. Once you start asking questions, your history will appear here.
        </p>

        <div className="subscreen-card">
          <h3>How it works</h3>
          <ul>
            <li>Describe your issue (example: “property dispute”, “harassment”, “rent issue”).</li>
            <li>AI provides general legal information and relevant direction.</li>
            <li>For verified advice, connect with a lawyer.</li>
          </ul>
        </div>

        <p className="disclaimer">
          Educational purpose only. Not a substitute for professional legal advice.
        </p>
      </div>
    </section>
  );
}
