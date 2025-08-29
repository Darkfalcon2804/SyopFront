import React, { createContext, useContext, useState, useEffect, Children } from "react";
import axios from "axios";
export const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState(null);
    const token = localStorage.getItem("authToken");
    const backendUrl = "http://localhost:3000"

    const fetchProfile = async () => {
        try {
            const res = await axios.get(`${backendUrl}/api/user/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(res.data.user);
            setIsLogin(true);
            setUser(res.data.user)
        }
        catch (error) {
            console.error("Failed to fetch profile:", error);
            setIsLogin(false);
            setUser(null);
        }
    }

    useEffect(() => {
        if (token) fetchProfile();
    }, [token])

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
        <AuthContext.Provider value={{ isLogin, user, login, logout, token, backendUrl }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuth = () => {
    return useContext(AuthContext);
}



