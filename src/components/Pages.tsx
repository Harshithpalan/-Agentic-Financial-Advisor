import React from 'react';
import { PremiumCard } from './ui/PremiumCard';
import { TrendingUp } from 'lucide-react';

export const Portfolio: React.FC = () => (
    <div className="p-10 max-w-1400 mx-auto space-y-12">
        <header>
            <h1 className="text-5xl font-bold glow-text vibrant-gradient tracking-tight">Active Portfolio</h1>
            <p className="text-[#B0C4C4] mt-3 text-lg">Detailed breakdown of your diversified assets.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PremiumCard title="Total Assets">
                <p className="text-4xl font-bold text-white tracking-tight mt-2">$84,320.00</p>
                <p className="text-[#2EF2E2] text-sm font-bold mt-4">+18.4% this year</p>
            </PremiumCard>
            <div className="md:col-span-2">
                <PremiumCard title="Asset Allocation">
                    <div className="flex items-center gap-10 mt-6 h-40">
                        <div className="h-full w-2 bg-[#2EF2E2] rounded-full" />
                        <div className="space-y-4 flex-1">
                            <div className="flex justify-between text-sm"><span className="text-[#B0C4C4]">Stocks</span><span className="text-white font-bold">65%</span></div>
                            <div className="flex justify-between text-sm"><span className="text-[#B0C4C4]">Crypto</span><span className="text-white font-bold">20%</span></div>
                            <div className="flex justify-between text-sm"><span className="text-[#B0C4C4]">Cash</span><span className="text-white font-bold">15%</span></div>
                        </div>
                    </div>
                </PremiumCard>
            </div>
        </div>
    </div>
);

export const Analytics: React.FC = () => (
    <div className="p-10 max-w-1400 mx-auto space-y-12">
        <header>
            <h1 className="text-5xl font-bold glow-text vibrant-gradient tracking-tight">Advanced Analytics</h1>
            <p className="text-[#B0C4C4] mt-3 text-lg">AI-driven insights into your financial behavior.</p>
        </header>
        <PremiumCard title="AI Intelligence Hub">
            <div className="p-20 text-center border-2 border-dashed border-[#2EF2E2]/10 rounded-3xl mt-6">
                <TrendingUp className="text-[#2EF2E2] w-12 h-12 mx-auto mb-6 opacity-40" />
                <p className="text-[#B0C4C4]">Generating your monthly spending report...</p>
            </div>
        </PremiumCard>
    </div>
);

export const Goals: React.FC = () => (
    <div className="p-10 max-w-1400 mx-auto space-y-12">
        <header>
            <h1 className="text-5xl font-bold glow-text vibrant-gradient tracking-tight">Financial Goals</h1>
            <p className="text-[#B0C4C4] mt-3 text-lg">Track your progress toward financial freedom.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PremiumCard title="Emergency Fund">
                <div className="mt-6 space-y-4">
                    <div className="flex justify-between text-sm"><span className="text-[#B0C4C4]">Progress</span><span className="text-[#2EF2E2] font-bold">85%</span></div>
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#2EF2E2]" style={{ width: '85%' }} />
                    </div>
                    <p className="text-lg font-bold text-white">$12,750 / $15,000</p>
                </div>
            </PremiumCard>
            <PremiumCard title="New Car">
                <div className="mt-6 space-y-4">
                    <div className="flex justify-between text-sm"><span className="text-[#B0C4C4]">Progress</span><span className="text-[#2EF2E2] font-bold">40%</span></div>
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#2EF2E2]" style={{ width: '40%' }} />
                    </div>
                    <p className="text-lg font-bold text-white">$16,000 / $40,000</p>
                </div>
            </PremiumCard>
        </div>
    </div>
);

export const Settings: React.FC = () => (
    <div className="p-10 max-w-1400 mx-auto space-y-12">
        <header>
            <h1 className="text-5xl font-bold glow-text vibrant-gradient tracking-tight">System Settings</h1>
            <p className="text-[#B0C4C4] mt-3 text-lg">Manage your profile and application preferences.</p>
        </header>
        <PremiumCard title="App Preferences">
            <div className="space-y-6 mt-6">
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <div>
                        <p className="font-bold text-white">Default AI Model</p>
                        <p className="text-sm text-[#B0C4C4]">GPT-4o (OpenAI)</p>
                    </div>
                    <div className="px-4 py-1.5 bg-[#2EF2E2]/10 text-[#2EF2E2] rounded-full text-xs font-bold uppercase cursor-pointer">Change</div>
                </div>
                <div className="flex justify-between items-center py-4">
                    <div>
                        <p className="font-bold text-white">Currency Display</p>
                        <p className="text-sm text-[#B0C4C4]">USD ($)</p>
                    </div>
                    <div className="px-4 py-1.5 bg-[#2EF2E2]/10 text-[#2EF2E2] rounded-full text-xs font-bold uppercase cursor-pointer">Change</div>
                </div>
            </div>
        </PremiumCard>
    </div>
);
