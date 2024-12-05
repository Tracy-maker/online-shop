import { useState, useEffect } from "react";
import { AiOutlineMessage } from "react-icons/ai";

const AIChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isWorkingHours, setIsWorkingHours] = useState(false);
  const [waitingForReply, setWaitingForReply] = useState(false);

  useEffect(() => {
    const now = new Date();
    const start = new Date();
    const end = new Date();
    start.setHours(8, 0, 0);
    end.setHours(17, 0, 0);
    setIsWorkingHours(now >= start && now <= end);
  }, []);

  const toggleWindow = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setWaitingForReply(true);

    if (isWorkingHours) {
      // Send to admin system for real-time response
      await sendToAdmin(userMessage);
    } else {
      // Use ChatGPT for AI response
      const aiResponse = await generateAIResponse(input);
      setMessages((prev) => [...prev, { type: "ai", text: aiResponse }]);
    }

    setWaitingForReply(false);
  };

  const generateAIResponse = async (question) => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your API key
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: question }],
          }),
        }
      );

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, I couldn't process your question. Please try again later.";
    }
  };

  const sendToAdmin = async (message) => {
    try {
      const response = await fetch("/api/admin/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message.text,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to admin.");
      }
    } catch (error) {
      console.error("Error sending message to admin:", error);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleWindow}
          className="bg-gray-800 text-gray-200 px-4 py-4 rounded-full shadow-lg hover:bg-gray-700 hover:text-white transition flex items-center justify-center"
        >
          <AiOutlineMessage size={24} />
        </button>
      )}

      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg p-4">
          {/* Chat Header */}
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Chat Support
            </h2>
            <button
              onClick={toggleWindow}
              className="text-gray-500 hover:text-gray-800 transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="space-y-2 mb-4 h-60 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-lg max-w-[70%] ${
                    msg.type === "user"
                      ? "bg-gray-800 text-gray-200"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Typing Indicator */}
          {waitingForReply && (
            <div className="text-sm text-gray-500 text-center">
              Processing your message...
            </div>
          )}

          {/* Input Field */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              disabled={waitingForReply}
            />
            <button
              onClick={handleSend}
              className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white transition"
              disabled={waitingForReply}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWindow;
