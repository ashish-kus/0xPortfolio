import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

const API_URL =
  "https://2mpe7ijza3ypxrxvdxxlzyodkq0xcvne.lambda-url.ap-south-1.on.aws/ask";
import myfavicon from "../assets/favicon.png";

// Placeholder favicon - replace with your actual favicon
// const myfavicon =
//  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23FF5722'/%3E%3Ctext x='50' y='50' font-size='60' text-anchor='middle' dy='.3em' fill='white'%3EA%3C/text%3E%3C/svg%3E";

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

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-[95vw] sm:w-[450px] md:w-[500px] lg:w-[550px] h-[600px] bg-[#1d1e20] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-800">
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
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#1d1e20] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === "user"
                      ? "bg-[#FF5722] text-white"
                      : "bg-[#2a2b2d] text-[#F8F9FA] shadow-sm border border-gray-700"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.type === "user"
                        ? "text-orange-100"
                        : "text-gray-400"
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

      {/* Chat Bubble Button - Only shows when chat is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#FF5722] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#E64A19] transition-all hover:scale-105 flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
