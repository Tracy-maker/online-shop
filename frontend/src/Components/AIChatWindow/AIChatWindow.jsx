import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const AIChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(UserContext);

  const toggleWindow = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Call OpenAI API for AI response
    try {
      const aiResponse = await fetchChatGPTResponse(input);
      setMessages((prev) => [...prev, { type: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: "Sorry, I'm having trouble understanding your request." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const fetchChatGPTResponse = async (userInput) => {
    const apiKey = "your_openai_api_key"; // Replace with your OpenAI API key

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", // or "gpt-3.5-turbo"
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: userInput },
        ],
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleWindow}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Chat with Us
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg p-4">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-lg font-semibold text-gray-800">AI Assistant</h2>
            <button
              onClick={toggleWindow}
              className="text-gray-500 hover:text-gray-800 transition"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
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
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="p-2 rounded-lg max-w-[70%] bg-gray-200 text-gray-800">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input Section */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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
