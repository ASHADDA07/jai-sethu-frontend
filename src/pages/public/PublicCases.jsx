import { useNavigate } from "react-router-dom";

export default function PublicCases() {
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
        <h2>My Legal Cases</h2>
        <p className="muted">
          No registered or ongoing cases found.
        </p>

        <div className="subscreen-card">
          <h3>What you will see here</h3>
          <ul>
            <li>Case ID, court name, stage, next hearing date.</li>
            <li>Documents attached to your case.</li>
            <li>Status updates from your lawyer.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
