import { useParams } from "react-router-dom";
import MessageBubble from "../../components/chat/MessageBubble";
import ChatInput from "../../components/chat/ChatInput";

export default function CaseChat() {
  const { caseId } = useParams();

  const messages = [
    { from: "client", text: "Hello sir" },
    { from: "lawyer", text: "Tell me your issue" },
  ];

  return (
    <section className="screen">

      <h3>Case #{caseId}</h3>

      <div className="chat-area">
        {messages.map((m, i) => (
          <MessageBubble key={i} {...m} />
        ))}
      </div>

      <ChatInput />

    </section>
  );
}
