import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import TodoInterface from './models/Todo';

const App = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [todos, setTodos] = useState<TodoInterface[]>([
    {
      id: '1',
      title: 'This is a task',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, debitis eum laboriosam culpa temporibus dolores odio quam dolor totam quis?',
      createdAt: new Date(),
      completed: false,
    },
    {
      id: '2',
      title: 'This is another task',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, debitis eum laboriosam culpa temporibus dolores odio quam dolor totam quis?',
      createdAt: new Date(),
      completed: true,
    },
    {
      id: '3',
      title: 'This is one another task',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, debitis eum laboriosam culpa temporibus dolores odio quam dolor totam quis?',
      createdAt: new Date(),
      completed: false,
    },
  ]);

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
    <div className="text-base bg-white text-gray-800 dark:text-white dark:bg-gray-800 min-h-screen">
      <Navbar handleTheme={handleTheme} theme={theme} />
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
