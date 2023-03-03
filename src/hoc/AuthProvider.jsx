import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const signIn = (candidate, callback) => {
        setUser(candidate);
        callback();
    }

    const signOut = callback => {
        setUser(null);
        callback();
    }

    const signUp = (candidate, callback) => {
        setUser(candidate);
        callback();
    }

    const value = {
        user, 
        signIn,
        signUp, 
        signOut
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};