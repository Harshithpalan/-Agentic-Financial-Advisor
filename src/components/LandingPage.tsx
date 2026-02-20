import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Cpu, ArrowRight, Sparkles, Globe, Brain } from 'lucide-react';
import { VibrantButton } from './ui/VibrantButton';

export const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0F2F2F] text-white relative overflow-hidden">
            <div className="orbital-bg" />

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-40 px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 mb-10 p-2 px-6 rounded-full bg-white/5 border border-[#2EF2E2]/20 backdrop-blur-md"
                >
                    <Sparkles className="text-[#2EF2E2] w-4 h-4 shadow-[0_0_10px_#2EF2E2]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2EF2E2]">The Ultimate Financial Command</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-7xl md:text-[140px] font-bold tracking-tighter leading-[0.85] max-w-6xl amazing-text"
                >
                    Agentic <br />
                    <span className="text-mask">Financial Advisor.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 text-2xl text-[#B0C4C4] max-w-3xl leading-relaxed opacity-70 font-medium"
                >
                    Experience the next generation of wealth intelligence. Autonomous reasoning,
                    deep fiscal synthesis, and sovereign control over your economic future.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-20 flex flex-wrap justify-center gap-8"
                >
                    <VibrantButton onClick={() => navigate('/dashboard')} className="px-14 py-6 text-xl">
                        Enter Interface <ArrowRight className="ml-3 w-6 h-6 inline" />
                    </VibrantButton>
                    <VibrantButton variant="outline" onClick={() => navigate('/explore')} className="px-14 py-6 text-xl">
                        Explore Engine
                    </VibrantButton>
                </motion.div>
            </section>

            {/* Immersive Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-60">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-20 bg-[#2EF2E2]/10 rounded-full blur-[120px] -z-10" />
                        <div className="glass-card aspect-square w-full max-w-[500px] flex items-center justify-center border-[#2EF2E2]/20 rounded-[80px] shadow-[0_0_80px_rgba(46,242,226,0.1)] mx-auto relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2EF2E2]/5 to-transparent rounded-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Brain size={240} strokeWidth={0.3} className="text-[#2EF2E2] opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#2EF2E2]/5 animate-pulse" />
                        </div>
                    </motion.div>

                    <div className="space-y-16">
                        <motion.header
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-6xl font-bold mb-8 tracking-tighter amazing-text">Deep Fiscal <span className="text-mask">Synthesis.</span></h2>
                            <p className="text-2xl text-[#B0C4C4] leading-relaxed opacity-60 font-light max-w-xl">
                                Engineering a platform that doesn't just display data—it understands economic momentum and decodes complex behaviors into actionable wealth strategies.
                            </p>
                        </motion.header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SmallFeature
                                icon={<Cpu size={24} />}
                                title="Autonomous Logic"
                                text="Self-evolving spending guards."
                                delay={0.1}
                            />
                            <SmallFeature
                                icon={<Globe size={24} />}
                                title="Global Context"
                                text="Real-time macro correlations."
                                delay={0.2}
                            />
                            <SmallFeature
                                icon={<ShieldCheck size={24} />}
                                title="Zero-Knowledge"
                                text="Next-gen privacy protocols."
                                delay={0.3}
                            />
                            <SmallFeature
                                icon={<TrendingUp size={24} />}
                                title="Infinite Scaling"
                                text="Built for legacy wealth."
                                delay={0.4}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const SmallFeature: React.FC<{ icon: React.ReactNode; title: string; text: string; delay: number }> = ({ icon, title, text, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay }}
        viewport={{ once: true }}
        className="glass-card p-6 flex gap-6 items-center border-white/5 bg-white/[0.02] hover:bg-white/[0.05] group transition-all duration-500"
    >
        <div className="w-14 h-14 rounded-2xl bg-[#2EF2E2]/5 border border-[#2EF2E2]/10 flex items-center justify-center text-[#2EF2E2] shadow-[0_0_20px_rgba(46,242,226,0.05)] group-hover:scale-110 group-hover:border-[#2EF2E2]/30 transition-all duration-500">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-white tracking-tight text-lg group-hover:text-[#2EF2E2] transition-colors">{title}</h4>
            <p className="text-sm text-[#B0C4C4] opacity-50 leading-tight mt-1">{text}</p>
        </div>
    </motion.div>
);
