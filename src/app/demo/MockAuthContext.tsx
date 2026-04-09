
import React, { createContext, useContext } from 'react';

const MockAuthContext = createContext({
    user: {
        id: 'demo-user-id',
        email: 'demo@ads.ai',
        name: 'Demo User',
    },
    loading: false,
    login: () => { },
    logout: () => alert('This is a demo!'),
    isAuthenticated: true,
});

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <MockAuthContext.Provider value={useContext(MockAuthContext)}>
            {children}
        </MockAuthContext.Provider>
    );
}
