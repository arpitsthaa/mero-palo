import { createContext, useContext, useState, useEffect } from 'react';
import { getUser, setUser as persistUser, clearUser, findUserByEmail, saveUserToDb } from '../utils/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const existing = getUser();
    if (existing) setUserState(existing);
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const found = findUserByEmail(email);
    if (!found) return { success: false, message: 'No account found with this email.' };
    if (found.password !== password) return { success: false, message: 'Incorrect password.' };
    persistUser(found);
    setUserState(found);
    return { success: true };
  };

  const register = (name, email, password) => {
    if (findUserByEmail(email)) {
      return { success: false, message: 'An account with this email already exists.' };
    }
    const newUser = { name, email, password, joinedAt: new Date().toISOString() };
    saveUserToDb(newUser);
    persistUser(newUser);
    setUserState(newUser);
    return { success: true };
  };

  const logout = () => {
    clearUser();
    setUserState(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
