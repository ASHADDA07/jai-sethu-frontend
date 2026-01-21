import { useNavigate } from "react-router-dom";

export default function StudentConstitution() {
  const navigate = useNavigate();

  return (
    <section className="screen student-screen active">
      <header className="topbar topbar-student">
        <div className="topbar-logo">J.A.I SETHU</div>
        <button className="topbar-action" onClick={() => navigate("/student")}>
          Dashboard
        </button>
      </header>

      <div className="subscreen-wrap">
        <h2>Constitution Explorer</h2>
        <p className="muted">
          This module explains constitutional topics in simple language.
        </p>

        <div className="subscreen-card">
          <h3>Topics (Prototype)</h3>
          <ul>
            <li><b>Right to Equality</b> (Articles 14–18): equal protection, non-discrimination.</li>
            <li><b>Right to Freedom</b> (Articles 19–22): speech, movement, safeguards for arrest.</li>
            <li><b>Fundamental Duties</b> (Article 51A): civic responsibility & national values.</li>
          </ul>
        </div>

        <p className="disclaimer">
          Educational use only. For legal work, verify from official texts and sources.
        </p>
      </div>
    </section>
  );
}
