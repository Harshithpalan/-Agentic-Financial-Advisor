import React from 'react';
import { PremiumCard } from '../ui/PremiumCard';
import { MOCK_STATS } from '../../utils/mockData';
import { TrendingUp, Wallet, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { ExpenseChart } from './ExpenseChart';
import { TransactionList } from '../Transactions/TransactionList';
import { SmartAgent } from '../Agent/SmartAgent';
import { ProjectionChart } from './ProjectionChart';

export const Dashboard: React.FC = () => {
    return (
        <div className="p-10 max-w-1400 mx-auto space-y-12 flex flex-col items-center">
            <header className="flex justify-between items-end w-full">
                <div>
                    <h1 className="text-5xl font-bold glow-text vibrant-gradient tracking-tight">Agentic Financial Advisor</h1>
                    <p className="text-[#B0C4C4] mt-3 text-lg">Intelligent wealth management for the modern era.</p>
                </div>
                <div className="text-right p-6 rounded-2xl bg-white/5 border border-[#2EF2E2]/10">
                    <p className="text-[10px] text-[#2EF2E2] uppercase tracking-[0.3em] font-bold opacity-80 mb-2">Total Net Worth</p>
                    <p className="text-4xl font-bold text-white tracking-tight">
                        ${MOCK_STATS.totalBalance.toLocaleString()}
                    </p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                <StatsCard
                    title="Monthly Income"
                    value={`$${MOCK_STATS.monthlyIncome.toLocaleString()}`}
                    icon={<ArrowUpCircle className="text-emerald-400" />}
                    trend="+5.2%"
                />
                <StatsCard
                    title="Monthly Expenses"
                    value={`$${MOCK_STATS.monthlyExpenses.toLocaleString()}`}
                    icon={<ArrowDownCircle className="text-rose-400" />}
                    trend="-2.1%"
                />
                <StatsCard
                    title="Savings Rate"
                    value={`${MOCK_STATS.savingsRate}%`}
                    icon={<TrendingUp className="text-cyan-400" />}
                    trend="+1.2%"
                />
                <StatsCard
                    title="Investment Value"
                    value="$32,450.00"
                    icon={<Wallet className="text-indigo-400" />}
                    trend="+12.5%"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                <div className="lg:col-span-2 space-y-8">
                    <PremiumCard title="Expense Breakdown">
                        <div className="h-[400px] w-full mt-4">
                            <ExpenseChart />
                        </div>
                    </PremiumCard>
                    <TransactionList />
                    <PremiumCard title="Future Net Worth Projections">
                        <div className="h-[300px] w-full mt-4">
                            <ProjectionChart />
                        </div>
                        <p className="text-xs text-[#B0C4C4] mt-4 italic opacity-60">
                            *Projections based on current monthly savings of $6,049 at 7% annual return.
                        </p>
                    </PremiumCard>
                </div>
                <div className="lg:col-span-1">
                    <SmartAgent />
                </div>
            </div>
        </div>
    );
};

interface StatsCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    trend: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend }) => (
    <PremiumCard className="relative overflow-hidden group">
        <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-xl bg-[#2EF2E2]/5 text-[#2EF2E2] border border-[#2EF2E2]/10">{icon}</div>
            <span className={`text-xs font-bold px-2 py-1 rounded-lg bg-white/5 ${trend.startsWith('+') ? 'text-[#2EF2E2]' : 'text-rose-400'}`}>
                {trend}
            </span>
        </div>
        <div className="mt-6">
            <p className="text-xs text-[#B0C4C4] font-bold uppercase tracking-widest opacity-70">{title}</p>
            <p className="text-3xl font-bold mt-2 text-white tabular-nums tracking-tight">{value}</p>
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#2EF2E2]/5 rounded-full blur-3xl group-hover:bg-[#2EF2E2]/10 transition-all duration-500" />
    </PremiumCard>
);
