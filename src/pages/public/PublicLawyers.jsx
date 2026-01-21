import { useNavigate } from "react-router-dom";

export default function PublicLawyers() {
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
        <h2>Connect to Lawyer</h2>
        <p className="muted">
          You have not contacted any lawyers yet. Verified advocates will appear once the backend is connected.
        </p>

        <div className="subscreen-card">
          <h3>Coming soon</h3>
          <ul>
            <li>Search by category (criminal, civil, family).</li>
            <li>Location-based verified advocates.</li>
            <li>Booking slot + secure chat.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
