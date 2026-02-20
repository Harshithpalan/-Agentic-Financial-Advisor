import React, { createContext, useContext } from 'react';

interface User {
    id: number;
    email: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (token: string, user: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USER: User = {
    id: 1,
    email: 'system.enabled@agentic.ai'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const login = () => { };
    const logout = () => { };

    return (
        <AuthContext.Provider value={{
            user: MOCK_USER,
            token: 'mock-token',
            login,
            logout,
            isAuthenticated: true
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    // If used outside of provider (though we should keep it for safety), return mock directly
    if (context === undefined) {
        return {
            user: MOCK_USER,
            token: 'mock-token',
            login: () => { },
            logout: () => { },
            isAuthenticated: true
        };
    }
    return context;
};
