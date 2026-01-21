import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CATEGORIES = [
  "Feature Request",
  "Bug Report",
  "Safety / Legal Concern",
  "Partnership / NGO",
  "Other",
];

export default function TalkToFounder() {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [contact, setContact] = useState(""); // email/phone
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "idle", text: "" });

  // Role comes from navigation state (dashboard passes it)
  const role = useMemo(() => {
    return location.state?.role || "Public";
  }, [location.state]);

  useEffect(() => {
    // Reset status when user edits
    if (status.type !== "idle") {
      setStatus({ type: "idle", text: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, contact, category, message]);

  function validate() {
    if (!message.trim() || message.trim().length < 10) {
      setStatus({
        type: "error",
        text: "Please write at least 10 characters so I can understand your request clearly.",
      });
      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ type: "loading", text: "Sending your message..." });

    // ✅ REAL PRODUCT APPROACH:
    // 1) For now we store locally (so nothing is lost)
    // 2) Later we replace with backend API call
    const payload = {
      id: crypto.randomUUID(),
      role,
      name: name.trim() || "Anonymous",
      contact: contact.trim() || null,
      category,
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("jai_sethu_feedback") || "[]");
      localStorage.setItem("jai_sethu_feedback", JSON.stringify([payload, ...existing]));

      // Later backend:
      // await api.post("/feedback", payload)

      setStatus({
        type: "success",
        text: "Message received ✅ It reached the Founder channel.",
      });

      // clear
      setName("");
      setContact("");
      setCategory(CATEGORIES[0]);
      setMessage("");
    } catch (err) {
      setStatus({
        type: "error",
        text: "Something went wrong while saving your message. Please try again.",
      });
    }
  }

  return (
    <section className="screen founder-screen active">
      <header className={`topbar topbar-founder`}>
        <div className="topbar-logo">J.A.I SETHU</div>

        <button className="topbar-action" onClick={() => navigate(-1)}>
          Back
        </button>
      </header>

      <div className="subscreen-wrap">
        <h2>Talk to the Founder</h2>
        <p className="muted">
          Your feedback shapes this platform. If something feels unsafe, confusing, or broken, tell me directly.
        </p>

        <div className="subscreen-card founder-card">
          <div className="founder-meta">
            <span className="founder-chip">From: {role}</span>
            <span className="founder-chip founder-chip-soft">Private channel</span>
          </div>

          <form className="founder-form" onSubmit={handleSubmit}>
            <div className="founder-grid">
              <div className="field">
                <label>Your name (optional)</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Sree Hanuj"
                  type="text"
                />
              </div>

              <div className="field">
                <label>Email / Phone (optional)</label>
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Ex: name@gmail.com / +91 XXXXX XXXXX"
                  type="text"
                />
              </div>

              <div className="field field-full">
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="field field-full">
                <label>Your message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write clearly: what happened, what you want, and what you expect."
                  rows={6}
                />
              </div>
            </div>

            <button
              className="founder-submit"
              type="submit"
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status.type !== "idle" && (
              <div className={`founder-status ${status.type}`}>
                {status.text}
              </div>
            )}
          </form>
        </div>

        <p className="disclaimer">
          Note: This is not legal advice. If there is an emergency, contact local authorities immediately.
        </p>
      </div>
    </section>
  );
}
