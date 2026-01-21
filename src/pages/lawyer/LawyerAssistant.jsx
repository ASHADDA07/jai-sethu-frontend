import { useNavigate } from "react-router-dom";

export default function LawyerAssistant() {
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
        <h2>Case Assistant</h2>
        <p className="muted">
          Prototype message: Enter an issue to get relevant sections and similar precedents (backend integration needed).
        </p>

        <div className="subscreen-card">
          <h3>How this feature helps</h3>
          <ul>
            <li>Suggests relevant sections + case law</li>
            <li>Highlights key ingredients to prove</li>
            <li>Creates rough argument outline</li>
          </ul>
        </div>

        <p className="disclaimer">
          Professional use only. Advocate remains responsible for legal accuracy.
        </p>
      </div>
    </section>
  );
}
