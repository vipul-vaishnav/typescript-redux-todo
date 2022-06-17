import React from 'react';
import MoonIcon from '../Icons/MoonIcon';
import SunIcon from '../Icons/SunIcon';

interface NavbarProps {
  theme: string | null;
  handleTheme: () => void;
}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="bg-gray-50 border-b-2 dark:bg-gray-900 dark:border-b-gray-700 border-b-gray-200 sm:py-5 sm:px-12 flex justify-between items-center py-4 px-4">
      <h1 className="font-logo text-2xl text-blue-600 dark:text-blue-400">
        Todos
      </h1>
      <button
        onClick={() => props.handleTheme()}
        className="bg-blue-600 dark:text-blue-600 p-2 rounded-full dark:bg-white text-white"
      >
        {props.theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
