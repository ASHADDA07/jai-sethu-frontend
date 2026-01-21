import { useNavigate } from "react-router-dom";

export default function Public() {
  const navigate = useNavigate();

  return (
    <section className="screen public-screen active">
      {/* Topbar */}
      <header className="topbar topbar-public">
        <div className="topbar-logo">J.A.I SETHU</div>
      </header>

      {/* Context */}
      <div className="public-context">
        <h2 className="context-title">Public Legal Access</h2>
        <p className="context-subtitle">
          Understand your rights, get guidance, and manage legal information securely.
        </p>
      </div>

      {/* Options */}
      <div className="public-options">
        <button className="dash-tile tile-ai" onClick={() => navigate("/public/ai")}>
          <h3>Talk to AI</h3>
          <p>Explain your issue in simple language and get legal guidance.</p>
        </button>

        <button
          className="dash-tile tile-lawyer"
          onClick={() => navigate("/public/lawyers")}
        >
          <h3>Connect to Lawyer</h3>
          <p>Find verified advocates suitable for your issue.</p>
        </button>

        <button
          className="dash-tile tile-cases"
          onClick={() => navigate("/public/cases")}
        >
          <h3>My Legal Cases</h3>
          <p>View and track registered or ongoing cases.</p>
        </button>

        <button
          className="dash-tile tile-evidence"
          onClick={() => navigate("/public/evidence")}
        >
          <h3>My Evidence Vault</h3>
          <p>Securely store documents, photos, and videos with integrity metadata.</p>
        </button>
      </div>

      {/* ===== Founder Ribbon (SPECIAL) ===== */}
      <div className="founder-ribbon">
        <div className="founder-ribbon-left">
          <div className="founder-badge">Founder Channel</div>
          <h3>Talk to the Founder</h3>
          <p>
            Share feedback, request features, or report anything unsafe.
            This goes directly to the Founder.
          </p>
        </div>

        <div className="founder-ribbon-right">
          <button
            className="founder-ribbon-btn"
            onClick={() => navigate("/founder", { state: { role: "Public" } })}
          >
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}
