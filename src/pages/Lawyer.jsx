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
        <h2 className="context-title">Lawyer Dashboard</h2>
        <p className="context-subtitle">
          Manage clients, analyze cases, prepare drafts, and work faster with structured assistance.
        </p>
      </div>

      {/* Modules */}
      <div className="lawyer-modules">
        <button
          className="dash-tile tile-lawyer-clients"
          onClick={() => navigate("/lawyer/clients")}
        >
          <h3>Client Intake</h3>
          <p>Manage incoming client requests and onboarding.</p>
        </button>

        <button
          className="dash-tile tile-lawyer-caseassistant"
          onClick={() => navigate("/lawyer/assistant")}
        >
          <h3>Case Assistant</h3>
          <p>Relevant sections, case patterns, and precedent guidance.</p>
        </button>

        <button
          className="dash-tile tile-lawyer-drafts"
          onClick={() => navigate("/lawyer/drafts")}
        >
          <h3>Draft Support</h3>
          <p>Structured drafting outlines for petitions and notices.</p>
        </button>

        <button
          className="dash-tile tile-lawyer-overview"
          onClick={() => navigate("/lawyer/overview")}
        >
          <h3>Practice Overview</h3>
          <p>Your workload, tasks, and activity summary.</p>
        </button>
      </div>

      {/* ===== Founder Ribbon (SPECIAL) ===== */}
      <div className="founder-ribbon founder-ribbon-lawyer">
        <div className="founder-ribbon-left">
          <div className="founder-badge">
            Founder Channel <span className="pulse-dot"></span>
          </div>
          <h3>Request Lawyer Tools</h3>
          <p>
            Ask for workflow tools, drafting formats, or backend features.
            Direct line to the Founder.
          </p>
        </div>

        <div className="founder-ribbon-right">
          <button
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
