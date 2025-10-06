import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  const [theme, setTheme] = useState('light'); // Default to light for this example

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <HomePage />
    </>
  );
}

export default App;