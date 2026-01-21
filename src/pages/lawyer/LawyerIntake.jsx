import { useNavigate } from "react-router-dom";

export default function LawyerIntake() {
  const navigate = useNavigate();

  return (
    <section className="screen lawyer-screen active">
      <header className="topbar topbar-lawyer">
        <div className="topbar-logo">J.A.I SETHU</div>
        <button className="topbar-action" onClick={() => navigate("/lawyer")}>
          Dashboard
        </button>
      </header>

      <div className="subscreen-wrap">
        <h2>Client Intake</h2>
        <p className="muted">No clients added yet.</p>

        <div className="subscreen-card">
          <h3>What will appear here</h3>
          <ul>
            <li>Client requests with issue summary</li>
            <li>Auto-generated intake forms</li>
            <li>Urgency flag (e.g., bail, harassment, threat)</li>
          </ul>
        </div>

        <p className="disclaimer">
          Final client verification will be handled through backend identity checks.
        </p>
      </div>
    </section>
  );
}
