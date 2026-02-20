import React from 'react';
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { PremiumCard } from '../ui/PremiumCard';
import { useTransactions } from '../../hooks/useFinancialData';

export const TransactionList: React.FC = () => {
    const { transactions, loading } = useTransactions();

    if (loading) return <div className="p-8 text-center text-muted">Loading transactions...</div>;

    return (
        <PremiumCard title="Recent Transactions" className="overflow-hidden">
            <div className="space-y-1 mt-4">
                {transactions.map((tx) => (
                    <div
                        key={tx.id}
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`p-2.5 rounded-xl ${tx.type === 'income' ? 'bg-[#2EF2E2]/10' : 'bg-white/5'}`}>
                                {tx.type === 'income' ? (
                                    <ArrowUpRight className="w-5 h-5 text-[#2EF2E2]" />
                                ) : (
                                    <ArrowDownRight className="w-5 h-5 text-[#B0C4C4]" />
                                )}
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm">{tx.merchant}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <p className="text-[10px] text-[#B0C4C4] font-bold uppercase tracking-widest opacity-60">{tx.date}</p>
                                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#2EF2E2]/10 text-[#2EF2E2] font-bold uppercase tracking-[0.1em] border border-[#2EF2E2]/10">
                                        {tx.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="text-right flex items-center gap-8">
                            <div className="hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Sparkles className="w-3.5 h-3.5 text-[#2EF2E2]" />
                                <span className="text-[10px] text-[#2EF2E2] font-bold uppercase tracking-wider">AI Insight</span>
                            </div>
                            <p className={`text-sm font-bold tracking-tight ${tx.type === 'income' ? 'text-[#2EF2E2]' : 'text-white'}`}>
                                {tx.type === 'income' ? '+' : ''}{tx.amount.toFixed(2)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </PremiumCard>
    );
};
