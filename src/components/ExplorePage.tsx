import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, ArrowLeft, Layers, Database, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { VibrantButton } from './ui/VibrantButton';

export const ExplorePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0F2F2F] text-white relative overflow-hidden">
            <div className="orbital-bg" />

            {/* Header */}
            <nav className="relative z-10 p-8 flex justify-between items-center max-w-7xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-[#B0C4C4] hover:text-[#2EF2E2] transition-colors font-bold uppercase tracking-widest text-[10px]"
                >
                    <ArrowLeft size={16} /> Back to Interface
                </button>
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#2EF2E2]/20 flex items-center justify-center border border-[#2EF2E2]/30">
                        <Sparkles className="text-[#2EF2E2]" size={16} />
                    </div>
                    <span className="font-bold tracking-widest text-[10px] uppercase text-[#B0C4C4]">Project: Economic Engine v1.0</span>
                </div>
            </nav>

            <main className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-40">
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#2EF2E2] to-[#00BFFF] flex items-center justify-center mb-10 shadow-[0_0_60px_rgba(46,242,226,0.2)]"
                    >
                        <Globe className="text-[#0F2F2F]" size={40} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-10 amazing-text"
                    >
                        Financial <br />
                        <span className="text-mask">Sovereignty</span> <br />
                        in the Age <br />
                        of Agency.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-[#B0C4C4] max-w-2xl font-medium leading-relaxed opacity-80"
                    >
                        Our engine doesn't just track numbers; it deciphers the hidden patterns of your economic existence.
                    </motion.p>
                </header>

                {/* Narrative Sections */}
                <div className="space-y-40">
                    <NarrativeBlock
                        icon={<Cpu />}
                        title="Neural Fiscal Intelligence"
                        text="A synthesis of deep-learning neural weights and rigorous fiscal logic. Every transaction is a data point in a vast ecosystem of private wealth, processed with sub-millisecond precision."
                    />

                    <NarrativeBlock
                        icon={<Database />}
                        rotate
                        title="The Architecture of Wealth"
                        text="Reimagined for the decentralized era. We leverage Neon's serverless PostgreSQL clusters to create a persistent, encrypted ledger that scales with your ambition."
                    />

                    <NarrativeBlock
                        icon={<Layers />}
                        title="Agentic Reasoning"
                        text="Moving beyond static dashboards. Our advisor employs autonomous reasoning loops to identify leakage, project compound growth, and simulate alternative economic futures."
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-40 p-20 rounded-[40px] bg-white/5 border border-white/10 text-center relative"
                >
                    <h2 className="text-5xl font-bold mb-8 italic text-mask">The Future is Already Encoded.</h2>
                    <VibrantButton onClick={() => navigate('/dashboard')} className="px-12 py-6 text-xl">
                        Enter Interface
                    </VibrantButton>
                </motion.div>
            </main>

            <footer className="relative z-10 p-20 text-center border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#B0C4C4]/40 font-bold">
                    © 2026 Agentic Financial Intelligence Systems. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

const NarrativeBlock: React.FC<{ icon: React.ReactNode; title: string; text: string; rotate?: boolean }> = ({ icon, title, text, rotate }) => (
    <motion.section
        initial={{ opacity: 0, x: rotate ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex flex-col md:flex-row gap-20 items-center ${rotate ? 'md:flex-row-reverse' : ''}`}
    >
        <div className="w-full md:w-1/2 aspect-square flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[#2EF2E2]/5 rounded-[60px] blur-2xl" />
            <div className="w-64 h-64 rounded-[40px] border border-[#2EF2E2]/20 flex items-center justify-center text-[#2EF2E2] relative bg-[#0F2F2F]/50 backdrop-blur-xl">
                {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { size: 100, strokeWidth: 1 }) : icon}
            </div>
        </div>
        <div className="w-full md:w-1/2">
            <h3 className="text-4xl font-bold mb-6 text-white tracking-tight">{title}</h3>
            <p className="text-xl text-[#B0C4C4] leading-relaxed font-light">{text}</p>
        </div>
    </motion.section>
);
