import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Welcome to Maharaj Movers concierge. How may I assist with your relocation today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", text: input }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "bot", 
        text: "Thank you. An executive move coordinator will review this and reach out shortly. Please leave your phone number." 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 bg-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
              <div>
                <h4 className="font-serif font-bold">Maharaj Concierge</h4>
                <p className="text-xs opacity-80">Typically replies in minutes</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="opacity-70 hover:opacity-100">
                <X size={20} />
              </button>
            </div>
            
            <div className="h-64 p-4 overflow-y-auto flex flex-col gap-3 bg-background/50">
              {messages.map((msg, i) => (
                <div key={i} className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground self-end rounded-tr-sm" 
                    : "bg-white/10 text-foreground self-start rounded-tl-sm"
                }`}>
                  {msg.text}
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-background flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary text-foreground"
              />
              <Button type="submit" size="icon" className="rounded-full bg-primary shrink-0">
                <Send size={16} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
