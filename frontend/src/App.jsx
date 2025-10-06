import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container pt-24">
        <HomePage />
      </main>
    </div>
  );
}

export default App;