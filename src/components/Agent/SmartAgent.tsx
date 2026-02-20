import React, { useState } from 'react';
import { PremiumCard } from '../ui/PremiumCard';
import { Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'agent';
}

export const SmartAgent: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: "Hello! I'm your AI Financial Advisor. How can I help you optimize your wealth today?", sender: 'agent' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Real AI Logic via Backend
        try {
            const res = await fetch('http://localhost:3001/api/advisor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: input, model: 'openai' }), // Default to OpenAI
            });
            const data = await res.json();

            const agentMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: data.advice || "I'm having trouble processing that right now.",
                sender: 'agent'
            };
            setMessages(prev => [...prev, agentMsg]);
        } catch (error) {
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: "Sorry, I couldn't reach the advisor service. Please check if the server is running.",
                sender: 'agent'
            }]);
        }
    };

    return (
        <PremiumCard title="Smart Advisor Agent" className="flex flex-col h-full overflow-hidden">
            <div className="flex-1 overflow-y-auto space-y-4 p-2 custom-scrollbar">
                <AnimatePresence>
                    {messages.map((m) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={m.id}
                            className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${m.sender === 'user'
                                ? 'bg-[#2EF2E2] text-[#0F2F2F] font-bold shadow-[0_0_20px_rgba(46,242,226,0.2)]'
                                : 'bg-white/5 text-[#E0E0E0] border border-white/10'
                                }`}>
                                <div className="flex items-center gap-2 mb-2">
                                    {m.sender === 'agent' ? <Bot className="w-3.5 h-3.5 text-[#2EF2E2]" /> : <User className="w-3.5 h-3.5 text-[#0F2F2F]/60" />}
                                    <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${m.sender === 'agent' ? 'text-[#2EF2E2] opacity-80' : 'text-[#0F2F2F] opacity-60'}`}>
                                        {m.sender === 'agent' ? 'Advisor AI' : 'You'}
                                    </span>
                                </div>
                                <div className="leading-relaxed">{m.text}</div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-6 relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask your advisor..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm text-white placeholder:text-[#B0C4C4]/40 focus:outline-none focus:border-[#2EF2E2]/30 transition-all duration-300"
                />
                <button
                    onClick={handleSend}
                    className="absolute right-2.5 top-2.5 p-2 rounded-xl bg-[#2EF2E2] hover:bg-[#2EF2E2]/90 transition-all duration-300 group shadow-[0_0_15px_rgba(46,242,226,0.3)]"
                >
                    <Send className="w-5 h-5 text-[#0F2F2F] group-hover:scale-110 transition-transform" />
                </button>
            </div>

            <div className="mt-6 flex items-center gap-2 px-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2EF2E2] animate-pulse" />
                <span className="text-[10px] text-[#B0C4C4] font-bold uppercase tracking-[0.1em] opacity-40">Antigravity Financial Engine</span>
            </div>
        </PremiumCard>
    );
};
