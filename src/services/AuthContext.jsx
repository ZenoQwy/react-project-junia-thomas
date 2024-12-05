import { createContext, useState, useEffect } from 'react';

// Créez un contexte
export const AuthContext = createContext();

// Créez un provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifiez si l'utilisateur est connecté (par exemple, via localStorage)
    const isConnected = localStorage.getItem('isConnected') === 'true';
    setIsAuthenticated(isConnected);
  }, []);

  const login = () => {
    localStorage.setItem('isConnected', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('isConnected');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
