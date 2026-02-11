import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../api/apiClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = async () => {
    try {
      const res = await api.get('/auth/profile');
      setUser(res.data);
    } catch (error) {
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      loadProfile();
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    try {
      const res = await api.post('/auth/login', credentials);
      localStorage.setItem('token', res.data.token);
      await loadProfile();
      toast.success('Login successful! Welcome back.', {
        position: 'top-right',
        autoClose: 3000,
      });
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Invalid username or password';
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 4000,
      });
      throw error;
    }
  };

  const register = async (data) => {
    try {
      const res = await api.post('/auth/register', data);

      toast.success('Registration successful! Please login to continue.', {
        position: 'top-right',
        autoClose: 3000,
      });
      
      // Return response (user needs to login)
      return res.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed. Username or email may already exist.';
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 4000,
      });
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    
    // Logout message
    toast.info('You have been logged out successfully.', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user, 
        loading,
        login,
        register,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
