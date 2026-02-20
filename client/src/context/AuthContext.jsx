import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const res = await axios.get('http://localhost:5000/api/auth/me', {
                headers: {
                    'x-auth-token': token
                }
            });
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (err) {
            console.error(err);
            localStorage.removeItem('token');
            setUser(null);
            setIsAuthenticated(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async (formData) => {
        const res = await axios.post('http://localhost:5000/api/auth/login', formData);
        localStorage.setItem('token', res.data.token);
        await checkAuth(); // Refetch user info
    };

    const register = async (formData) => {
        const res = await axios.post('http://localhost:5000/api/auth/register', formData);
        localStorage.setItem('token', res.data.token);
        await checkAuth(); // Refetch user info
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, loading, login, register, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
