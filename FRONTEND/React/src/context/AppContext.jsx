import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => localStorage.getItem('fd_token') || '');
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('fd_cart');
    return stored ? JSON.parse(stored) : [];
  });
  const [toast, setToast] = useState(null);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('fd_darkmode') === 'true');

  useEffect(() => {
    localStorage.setItem('fd_token', authToken || '');
  }, [authToken]);

  useEffect(() => {
    localStorage.setItem('fd_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('fd_darkmode', darkMode ? 'true' : 'false');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    window.setTimeout(() => setToast(null), 2800);
  };

  const login = (token) => {
    setAuthToken(token);
    showToast('Logged in successfully', 'success');
  };

  const logout = () => {
    setAuthToken('');
    setCartItems([]);
    localStorage.removeItem('fd_token');
    showToast('You have logged out', 'info');
  };

  const addToCart = (item) => {
    setCartItems((current) => {
      const existing = current.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
    showToast(`${item.name} added to cart`, 'success');
  };

  const updateQuantity = (itemId, delta) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((current) => current.filter((item) => item.id !== itemId));
    showToast('Item removed from cart', 'info');
  };

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  return (
    <AppContext.Provider
      value={{
        authToken,
        cartItems,
        cartCount,
        cartTotal,
        toast,
        darkMode,
        showToast,
        login,
        logout,
        addToCart,
        updateQuantity,
        removeFromCart,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
