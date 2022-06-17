import React from 'react';
import Todo from './Todo';
import TodoInterface from './../models/Todo';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../store/store';
import { clearTodos } from './../store/TodoSlice';

interface TodoListProps {
  items: TodoInterface[];
}

const TodoList = (props: TodoListProps) => {
  const todos = useSelector((state: RootState) => state.Todos);

  const completedTodos = todos.filter((todo) => todo.completed);

  const dispatch = useDispatch();

  return (
    <div className="px-4 sm:px-12 pb-6 pt-0 max-w-3xl mx-auto">
      <h1 className="my-5 font-bold flex justify-between items-center">
        <span>Your Todos</span>
        <span>Completed: {completedTodos.length}</span>
        <span>Total: {todos.length}</span>
        <button
          onClick={() => dispatch(clearTodos())}
          className="sm:rounded-md flex justify-center items-center sm:py-2 sm:px-4 gap-2 p-2 rounded-full bg-red-500 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="text-xs hidden sm:block">Clear All</span>
        </button>
      </h1>
      <hr className="block border-0 outline-0 w-full h-1 bg-gray-400 mb-5" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
        {props.items.map((item) => {
          return <Todo key={uuidv4()} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
