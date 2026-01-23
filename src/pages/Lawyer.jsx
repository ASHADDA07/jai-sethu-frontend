import { useNavigate } from "react-router-dom";

export default function Lawyer() {
  const navigate = useNavigate();

  return (
    <section className="screen lawyer-screen active">
      {/* Topbar */}
      <header className="topbar topbar-lawyer">
        <div className="topbar-logo">J.A.I SETHU</div>
      </header>

      {/* Context */}
      <div className="lawyer-context">
        <h2>Lawyer Dashboard</h2>
        <p>Manage clients, analyze cases, and prepare efficiently.</p>
      </div>

      {/* Modules */}
      <div className="lawyer-modules">
        <button
          type="button"
          className="dash-tile tile-clients"
          onClick={() => navigate("/lawyer/intake")}
        >
          <h3>Client Intake</h3>
          <p>Incoming client requests will appear here.</p>
        </button>

        <button
          type="button"
          className="dash-tile tile-assistant"
          onClick={() => navigate("/lawyer/assistant")}
        >
          <h3>Case Assistant</h3>
          <p>Analyze issues and relevant precedents.</p>
        </button>

        <button
          type="button"
          className="dash-tile tile-drafts"
          onClick={() => navigate("/lawyer/drafts")}
        >
          <h3>Draft Support</h3>
          <p>Guidance for pleadings and documents.</p>
        </button>

        <button
          type="button"
          className="dash-tile tile-overview"
          onClick={() => navigate("/lawyer/overview")}
        >
          <h3>Practice Overview</h3>
          <p>Your professional activity summary.</p>
        </button>
      </div>

      {/* Founder Ribbon */}
      <div className="founder-ribbon">
        <div className="founder-ribbon-left">
          <div className="founder-badge">Founder Channel</div>
          <h3>Talk to the Founder</h3>
          <p>
            Share feedback, request features, or report anything unsafe. This goes
            directly to the Founder.
          </p>
        </div>

        <div className="founder-ribbon-right">
          <button
            type="button"
            className="founder-ribbon-btn"
            onClick={() => navigate("/founder", { state: { role: "Lawyer" } })}
          >
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}
