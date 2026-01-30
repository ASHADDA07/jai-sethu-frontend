import { useNavigate } from "react-router-dom";

export default function ChatHome() {
  const navigate = useNavigate();

  const dummyCases = [
    { id: "101", title: "Property Dispute" },
    { id: "102", title: "Cheque Bounce" },
    { id: "103", title: "Divorce Petition" },
  ];

  return (
    <section className="screen">
      <h2>Your Legal Conversations</h2>

      {dummyCases.map(c => (
        <div
          key={c.id}
          className="case-card"
          onClick={() => navigate(`/chat/${c.id}`)}
        >
          {c.title}
        </div>
      ))}
    </section>
  );
}
