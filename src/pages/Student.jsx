import { useNavigate } from "react-router-dom";

export default function Student() {
  const navigate = useNavigate();

  return (
    <section className="screen student-screen active">
      <header className="topbar topbar-student">
        <div className="topbar-logo">J.A.I SETHU</div>
      </header>

      <div className="student-context">
        <h2>Law Student Workspace</h2>
        <p>Explore constitutional principles, landmark judgments, and notes.</p>
      </div>

      <div className="student-modules">
        <button
          type="button"
          className="dash-tile tile-constitution"
          onClick={() => navigate("/student/constitution")}
        >
          <h3>Constitution Explorer</h3>
          <p>Simplified understanding of constitutional values.</p>
        </button>

        <button
          type="button"
          className="dash-tile tile-cases"
          onClick={() => navigate("/student/cases")}
        >
          <h3>Landmark Judgments</h3>
          <p>Study foundational cases and judicial reasoning.</p>
        </button>

        <button
          type="button"
          className="dash-tile tile-sections"
          onClick={() => navigate("/student/sections")}
        >
          <h3>Section Lookup</h3>
          <p>Search statutory provisions for reference.</p>
        </button>

        <button
          type="button"
          className="dash-tile tile-notes"
          onClick={() => navigate("/student/notes")}
        >
          <h3>My Notes</h3>
          <p>Save key points & summaries for your exams.</p>
        </button>
      </div>

      {/* Founder Ribbon */}
      <div className="founder-ribbon">
        <div className="founder-ribbon-left">
          <div className="founder-badge">Founder Channel</div>
          <h3>Talk to the Founder</h3>
          <p>
            Suggest features or share improvements for students. This goes directly
            to the Founder.
          </p>
        </div>

        <div className="founder-ribbon-right">
          <button
            type="button"
            className="founder-ribbon-btn"
            onClick={() => navigate("/founder", { state: { role: "Student" } })}
          >
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}
