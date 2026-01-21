import { useNavigate } from "react-router-dom";

export default function LawyerOverview() {
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
        <h2>Practice Overview</h2>
        <p className="muted">No activity recorded yet.</p>

        <div className="subscreen-card">
          <h3>Metrics you’ll see here</h3>
          <ul>
            <li>Active matters count</li>
            <li>Pending hearing reminders</li>
            <li>Client communication logs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
