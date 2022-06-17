import React from 'react';
import Todo from './Todo';
import TodoInterface from './../models/Todo';
import { v4 as uuidv4 } from 'uuid';

interface TodoListProps {
  items: TodoInterface[];
}

const TodoList = (props: TodoListProps) => {
  return (
    <div className="px-4 sm:px-12 pb-6 pt-0 max-w-3xl mx-auto">
      <h1 className="my-5 font-bold flex justify-between items-center">
        <span>Your Todos</span>
        <span>Completed: 0</span>
        <span>Total: 0</span>
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {props.items.map((item) => {
          return <Todo key={uuidv4()} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
