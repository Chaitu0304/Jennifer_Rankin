import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi there. I'm Jennifer's virtual assistant. Would you like to check her availability for a free 15-minute consultation?",
    },
  ]);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-jennifer-glow transition-transform hover:scale-105"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex h-[480px] w-[340px] flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-jennifer-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/20">
                  <img src="/jennifer-portrait.png" alt="Jennifer" className="h-full w-full object-cover" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
                </div>
                <div>
                  <h3 className="font-sans font-medium leading-none">Jennifer Rankin</h3>
                  <span className="text-xs text-white/80">Virtual Assistant</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-background p-4">
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-white border border-black/5 text-foreground shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {/* Quick Replies */}
                <div className="mt-2 flex flex-col gap-2">
                  <button className="flex w-full items-center justify-between rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-primary transition-colors hover:bg-primary/5">
                    <span>Yes, I'd like to book a call</span>
                    <span className="text-primary/50">→</span>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm text-primary transition-colors hover:bg-primary/5">
                    <span>Do you take insurance?</span>
                    <span className="text-primary/50">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Input (Disabled for mockup) */}
            <div className="border-t border-black/5 bg-white p-3">
              <div className="flex items-center gap-2 rounded-full border border-black/10 bg-background px-4 py-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  disabled
                />
                <button className="text-primary disabled:opacity-50" disabled>
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
