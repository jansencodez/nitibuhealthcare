"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiChatSmile3Line,
  RiSendPlane2Line,
  RiCloseLine,
} from "react-icons/ri";
import { useTheme } from "@/context/ThemeContext";
import responseMap from "@/data/responseMap";

type Message = {
  text: string;
  isBot: boolean;
  id: number;
};

const ChatInterface = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const responseQueue = useRef<{ text: string; id: number }[]>([]);
  const currentMessageId = useRef(0);
  const isProcessing = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processQueue = async () => {
    if (isProcessing.current || responseQueue.current.length === 0) return;

    isProcessing.current = true;
    const { text, id } = responseQueue.current.shift()!;

    let displayedText = "";
    for (const char of text) {
      displayedText += char;
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, text: displayedText } : msg
        )
      );
      await new Promise((resolve) => setTimeout(resolve, 20));
    }

    isProcessing.current = false;
    processQueue();
  };

  const handleSend = async () => {
    if (!inputText.trim() || isTyping) return;

    const userMessageId = currentMessageId.current++;
    setMessages((prev) => [
      ...prev,
      { text: inputText, isBot: false, id: userMessageId },
    ]);

    const userInput = inputText;
    setInputText("");

    try {
      setIsTyping(true);
      const response = await getBotResponse(userInput);
      const botMessageId = currentMessageId.current++;

      setMessages((prev) => [
        ...prev,
        { text: "", isBot: true, id: botMessageId },
      ]);

      responseQueue.current.push({ text: response, id: botMessageId });
      processQueue();
    } catch (error: unknown) {
      if (error instanceof Error)
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, I encountered an error. Please try again.",
            isBot: true,
            id: currentMessageId.current++,
          },
        ]);
    } finally {
      setIsTyping(false);
    }
  };

  const getBotResponse = (input: string) => {
    // Normalize input
    const cleanInput = input.toLowerCase().trim();

    // Find the best matching category
    const matchedCategory = responseMap.find((category) =>
      category.triggers.some(
        (trigger) =>
          cleanInput.includes(trigger) || trigger.includes(cleanInput)
      )
    );

    // Fallback for complex queries
    return (
      matchedCategory?.response ||
      `I understand you're asking about: "${input}". For detailed inquiries, 
      our team can help at info@nitibuhealth.co.ke or +254 700 000 000. 
      Would you like me to clarify anything else?`
    );
  };

  return (
    <div className="fixed bottom-8 right-4 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`relative w-96 max-w-[calc(100vw-2rem)] max-h-[calc(100vh-10rem)] flex flex-col rounded-xl shadow-xl ${
              theme === "dark"
                ? "bg-gray-800 text-gray-100"
                : "bg-white text-gray-800"
            }`}
            style={{
              right: 0,
              bottom: "calc(100% + 1rem)",
            }}
          >
            {/* Chat Header */}
            <div
              className={`p-4 rounded-t-xl flex items-center justify-between ${
                theme === "dark" ? "bg-gray-900" : "bg-teal-600 text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <RiChatSmile3Line className="w-6 h-6" />
                <h3 className="font-semibold">NitiCare Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:opacity-80"
              >
                <RiCloseLine className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="space-y-2">
                  <p className="text-sm opacity-75">Ask me about:</p>
                  <button
                    onClick={() => setInputText("What products do you offer?")}
                    className="p-2 text-left w-full rounded-lg bg-gray-100 dark:bg-gray-700"
                  >
                    What products do you offer?
                  </button>
                </div>
              )}

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isBot
                        ? theme === "dark"
                          ? "bg-gray-700"
                          : "bg-gray-100"
                        : theme === "dark"
                        ? "bg-teal-700"
                        : "bg-teal-600 text-white"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Niti is typing</span>
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-current rounded-full animate-dot-bounce-1" />
                        <div className="w-2 h-2 bg-current rounded-full animate-dot-bounce-2" />
                        <div className="w-2 h-2 bg-current rounded-full animate-dot-bounce-3" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className={`flex-1 p-2 rounded-lg ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-700"
                      : "bg-gray-50 border-gray-200"
                  } border focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  className={`p-2 rounded-lg ${
                    theme === "dark"
                      ? "bg-teal-600 hover:bg-teal-500"
                      : "bg-teal-600 hover:bg-teal-500 text-white"
                  }`}
                  disabled={isTyping}
                >
                  <RiSendPlane2Line className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg ${
          theme === "dark"
            ? "bg-teal-600 hover:bg-teal-500"
            : "bg-teal-600 hover:bg-teal-500 text-white"
        }`}
      >
        <RiChatSmile3Line className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatInterface;
