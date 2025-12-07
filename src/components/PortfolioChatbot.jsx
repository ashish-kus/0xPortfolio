import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import myfavicon from "../assets/favicon.png";

const API_URL =
  "https://2mpe7ijza3ypxrxvdxxlzyodkq0xcvne.lambda-url.ap-south-1.on.aws/ask";

export default function PortfolioChatbot() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm Ashish's AI assistant. Feel free to ask me about his projects, skills, experience, or education!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Fix hydration issue by only rendering on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      type: "user",
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${API_URL}?question=${encodeURIComponent(input)}`,
      );
      const data = await response.json();

      const botMessage = {
        type: "bot",
        text: data.answer || data.error || "Sorry, I encountered an error.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        type: "bot",
        text: "Sorry, I encountered an error connecting to the server.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-96 h-[500px] bg-[#1d1e20] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-800">
          {/* Header */}
          <div className="bg-[#1d1e20] border-b border-gray-800 text-[#F8F9FA] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2a2b2d] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={myfavicon}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#F8F9FA]">Ashish</h3>
                <p className="text-xs text-gray-400">Ask me anything</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-gray-800 rounded-full p-1.5 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#1d1e20]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 shadow-sm border border-gray-200"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.type === "user"
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#2a2b2d] rounded-2xl p-3 border border-gray-800">
                  <Loader2 className="animate-spin text-[#FF5722]" size={20} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-[#1d1e20] border-t border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about projects, skills..."
                className="flex-1 px-4 py-2.5 bg-[#2a2b2d] border border-gray-800 text-[#F8F9FA] placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent transition-all"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-[#FF5722] text-white p-2.5 rounded-full hover:bg-[#E64A19] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#FF5722] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#E64A19] transition-all hover:scale-105 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
