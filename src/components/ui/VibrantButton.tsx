import React from 'react';
import { motion } from 'framer-motion';

interface VibrantButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const VibrantButton: React.FC<VibrantButtonProps> = ({
    children,
    onClick,
    className = '',
    variant = 'primary',
    type = 'button',
    disabled = false
}) => {
    const variants = {
        primary: 'bg-[#2EF2E2] text-[#0F2F2F] btn-glow-primary font-bold',
        secondary: 'bg-white/5 text-[#2EF2E2] border border-[#2EF2E2]/20 backdrop-blur-md',
        outline: 'border border-[#2EF2E2]/30 text-[#2EF2E2] hover:bg-[#2EF2E2]/5'
    };

    return (
        <motion.button
            whileHover={!disabled ? {
                scale: 1.05,
                translateY: -4,
                boxShadow: variant === 'primary' ? '0 20px 40px rgba(46, 242, 226, 0.3)' : 'none'
            } : {}}
            whileTap={!disabled ? { scale: 0.96 } : {}}
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 btn-shine ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} flex items-center justify-center tracking-tight`}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};
