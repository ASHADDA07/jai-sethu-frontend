import { useNavigate } from "react-router-dom";

export default function StudentJudgments() {
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
        <h2>Landmark Judgments</h2>
        <p className="muted">
          Learn doctrines and constitutional interpretation through important cases.
        </p>

        <div className="subscreen-card">
          <h3>Highlighted Cases</h3>
          <ul>
            <li><b>Kesavananda Bharati</b>: Basic Structure Doctrine (limits amendment power).</li>
            <li><b>Maneka Gandhi</b>: Expanded Article 21, fairness & due process.</li>
            <li><b>Vishaka</b>: Guidelines on workplace harassment (constitutional safeguards).</li>
          </ul>
        </div>

        <div className="subscreen-card">
          <h3>Recent Judicial Focus (Prototype)</h3>
          <p className="muted">
            Courts increasingly emphasize dignity, proportionality, and constitutional morality.
          </p>
        </div>
      </div>
    </section>
  );
}
