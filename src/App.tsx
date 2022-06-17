import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

const App = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  const handleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="text-base bg-white text-gray-800 dark:text-white dark:bg-gray-800">
      <Navbar handleTheme={handleTheme} theme={theme} />
    </div>
  );
};

export default App;
