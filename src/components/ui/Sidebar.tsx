import React from 'react';
import { LayoutDashboard, Wallet, CreditCard, PieChart, Target, Settings, ShieldCheck } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
    const navigate = useNavigate();

    return (
        <aside className={`flex flex-col h-full ${className}`} style={{ width: '280px', backgroundColor: 'var(--sidebar-bg)', borderRight: '1px solid rgba(46, 242, 226, 0.1)' }}>
            <div className="p-10">
                <div className="flex flex-col items-center text-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="flex items-center justify-center rounded-2xl" style={{ width: '56px', height: '56px', background: 'var(--accent-gradient)', boxShadow: '0 0 30px rgba(46, 242, 226, 0.3)' }}>
                        <ShieldCheck className="text-[#0F2F2F]" size={32} />
                    </div>
                    <div>
                        <h2 className="text-white font-bold tracking-tight" style={{ fontSize: '1.25rem', lineHeight: '1.2' }}>Agentic Financial Advisor</h2>
                        <p className="uppercase tracking-tight mt-2 font-bold" style={{ fontSize: '9px', color: 'var(--primary)', opacity: 0.8, letterSpacing: '0.3em' }}>System Enabled</p>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                <NavItem to="/dashboard" icon={<LayoutDashboard size={22} />} label="Dashboard" />
                <NavItem to="/portfolio" icon={<Wallet size={22} />} label="Portfolio" />
                <NavItem icon={<CreditCard size={22} />} label="Transactions" />
                <NavItem to="/analytics" icon={<PieChart size={22} />} label="Analytics" />
                <NavItem to="/goals" icon={<Target size={22} />} label="Goals" />
            </nav>

            <div className="p-8 mt-auto flex flex-col gap-2" style={{ borderTop: '1px solid rgba(46, 242, 226, 0.05)' }}>
                <NavItem to="/settings" icon={<Settings size={22} />} label="Settings" />
            </div>
        </aside>
    );
};

interface NavItemProps {
    to?: string;
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
    if (!to) {
        return (
            <div className="nav-item nav-item-inactive opacity-50 cursor-not-allowed">
                {icon}
                <span className="font-medium" style={{ fontSize: '0.875rem' }}>{label}</span>
            </div>
        );
    }

    return (
        <NavLink
            to={to}
            className={({ isActive }) => `nav-item ${isActive ? 'nav-item-active' : 'nav-item-inactive'}`}
        >
            {({ isActive }) => (
                <>
                    <div className="flex items-center justify-center">
                        {icon}
                    </div>
                    <span className="font-medium" style={{ fontSize: '0.875rem' }}>{label}</span>
                    {isActive && (
                        <div className="ml-auto" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }} />
                    )}
                </>
            )}
        </NavLink>
    );
};
