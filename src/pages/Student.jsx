import { useNavigate } from "react-router-dom";

export default function Student() {
  const navigate = useNavigate();

  return (
    <section className="screen student-screen active">
      {/* Topbar */}
      <header className="topbar topbar-student">
        <div className="topbar-logo">J.A.I SETHU</div>
      </header>

      {/* Context */}
      <div className="student-context">
        <h2 className="context-title">Law Student Workspace</h2>
        <p className="context-subtitle">
          Explore constitution concepts, landmark judgments, and section references with clarity.
        </p>
      </div>

      {/* Modules */}
      <div className="student-modules">
        <button
          className="dash-tile tile-student-constitution"
          onClick={() => navigate("/student/constitution")}
        >
          <h3>Constitution Explorer</h3>
          <p>Simplified rights, duties, and constitutional values.</p>
        </button>

        <button
          className="dash-tile tile-student-judgments"
          onClick={() => navigate("/student/judgments")}
        >
          <h3>Landmark Judgments</h3>
          <p>Study foundational cases and judicial reasoning.</p>
        </button>

        <button
          className="dash-tile tile-student-sections"
          onClick={() => navigate("/student/sections")}
        >
          <h3>Section Lookup</h3>
          <p>Quick statutory lookup for academic reference.</p>
        </button>

        <button
          className="dash-tile tile-student-notes"
          onClick={() => navigate("/student/notes")}
        >
          <h3>My Notes</h3>
          <p>Save and organize important points for revision.</p>
        </button>
      </div>

      {/* ===== Founder Ribbon (SPECIAL) ===== */}
      <div className="founder-ribbon founder-ribbon-student">
        <div className="founder-ribbon-left">
          <div className="founder-badge">
            Founder Channel <span className="pulse-dot"></span>
          </div>
          <h3>Share Student Feedback</h3>
          <p>
            Suggest features, report issues, or request study tools.
            Your message goes directly to the Founder.
          </p>
        </div>

        <div className="founder-ribbon-right">
          <button
            className="founder-ribbon-btn"
            onClick={() => navigate("/founder", { state: { role: "Law Student" } })}
          >
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}
