import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <section className="screen intro-screen active">
      <div className="intro-brand">
        <h1 className="brand-logo">J.A.I SETHU</h1>
        <p className="brand-tagline">Legal clarity for everyone</p>
      </div>

      <div className="intro-roles">
        <button className="role-btn" onClick={() => navigate("/public")}>
          Public
        </button>
        <button className="role-btn" onClick={() => navigate("/student")}>
          Law Student
        </button>
        <button className="role-btn" onClick={() => navigate("/lawyer")}>
          Lawyer
        </button>
      </div>
    </section>
  );
}
