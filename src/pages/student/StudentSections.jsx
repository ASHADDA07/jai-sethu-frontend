import { useNavigate } from "react-router-dom";

export default function StudentSections() {
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
        <h2>Section Lookup</h2>
        <p className="muted">
          Prototype message: Section lookup will become searchable once backend is connected.
        </p>

        <div className="subscreen-card">
          <h3>How it will work</h3>
          <ul>
            <li>Enter section number (example: IPC 420).</li>
            <li>View simplified explanation + ingredients of offence.</li>
            <li>See linked cases and interpretations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
