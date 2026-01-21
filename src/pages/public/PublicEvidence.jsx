import { useNavigate } from "react-router-dom";

export default function PublicEvidence() {
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
        <h2>My Evidence Vault</h2>
        <p className="muted">
          You have not stored any evidence yet.
        </p>

        <div className="subscreen-card">
          <h3>Evidence integrity (prototype message)</h3>
          <ul>
            <li>Each upload will record date/time metadata.</li>
            <li>Tamper-awareness using hashes.</li>
            <li>Encrypted storage (backend feature).</li>
          </ul>
        </div>

        <p className="disclaimer">
          Admissibility depends on court discretion and proper legal procedure.
        </p>
      </div>
    </section>
  );
}
