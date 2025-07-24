import React, { createContext, useContext, useState, useEffect, Children } from "react";

export const AuthContext = createContext(null);


export const AuthProvider = ({ Children }) => {
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState(null);

    useEffect(() => {
        let token = localStorage.getItem("authToken")
        if (token) {
            setIsLogin(true);
        }
    }, [])

    const login = (userData, token) => {
        setIsLogin(true);
        setUser(userData);
        localStorage.setItem("authToken", token);
    }
    const logout = () => {
        setIsLogin(false);
        setUser(null);
        localStorage.removeItem("authToken");
    }

    return (
        <AuthContext.Provider value={{ isLogin, user, login, logout }}>
            {Children}
        </AuthContext.Provider>
    )
}

export const UseAuth = () => {
    return useContext(AuthContext);
}



