import React, { createContext, useContext, useState } from "react";

// Create Auth Context
const AuthContext = createContext();

// Custom hook for using Auth Context
export const useAuth = () => {
    return useContext(AuthContext);
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Replace with your authentication logic

    const login = async (email, password) => {
        // Implement your login logic here
    };

    const logout = () => {
        // Implement your logout logic here
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
