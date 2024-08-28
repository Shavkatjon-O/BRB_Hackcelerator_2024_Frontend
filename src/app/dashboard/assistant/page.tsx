"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CoreAPI from "@/lib/coreApi";

const AssistantPage = () => {
  const [messages, setMessages] = useState<{ text: string; type: "user" | "bot" }[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = async () => {
    if (input.trim()) {
      // Add user message to state

      console.log("input", input);
      setMessages([...messages, { text: input, type: "user" }]);
      setInput("");

      try {
        // Send message to the API
        const response = await CoreAPI.post("/bot/chat/", { question: input });
        const botMessage = response.data;

        // Add bot response to state
        setMessages([...messages, { text: input, type: "user" }, { text: botMessage, type: "bot" }]);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="h-full flex justify-center p-4 bg-gray-100">
      <div className="flex flex-col w-full max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
        <main className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <div key={index} className={`p-3 rounded-lg ${message.type === "user" ? "bg-blue-200 text-right" : "bg-gray-200 text-left"}`}>
                  {message.text}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No messages yet.</p>
            )}
          </div>

          <div className="border-t bg-gray-50 p-2 flex items-center space-x-2">
            <Textarea
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSend} variant="default">
              Send
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AssistantPage;
