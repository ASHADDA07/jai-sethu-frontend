import { useNavigate } from "react-router-dom";

export default function LawyerDrafts() {
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
        <h2>Draft Support</h2>
        <p className="muted">No drafts created yet.</p>

        <div className="subscreen-card">
          <h3>Drafts coming soon</h3>
          <ul>
            <li>Petition outline generator</li>
            <li>Legal notice template builder</li>
            <li>Affidavit and vakalat templates</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
