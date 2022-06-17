import React from 'react';
import CheckIcon from '../Icons/CheckIcon';
import DeleteIcon from '../Icons/DeleteIcon';
import TodoInterface from './../models/Todo';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleStatus } from './../store/TodoSlice';

interface TodoProps {
  item: TodoInterface;
}

const Todo = (props: TodoProps) => {
  const dispatch = useDispatch();
  return (
    <li className="relative sm:py-4 sm:px-5 px-6 py-5 mb-2 border-2 border-gray-300 rounded-md">
      <h2 className="font-bold text-2xl mb-3">{props.item.title}</h2>
      <p className="font-medium text-md mb-3">{props.item.description}</p>
      <span
        className={
          props.item.completed
            ? 'bg-green-500 text-white p-2 rounded-full block  absolute sm:-top-5 sm:-left-5 -top-4 -left-3'
            : 'bg-gray-300 text-black p-2 rounded-full block  absolute sm:-top-5 sm:-left-5 -top-4 -left-3'
        }
      >
        <CheckIcon />
      </span>
      <p className="font-medium text-sm mb-3 mt-1">{props.item.createdAt}</p>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <span className="font-bold">Mark Done</span>
          <input
            className="cursor-pointer"
            type="checkbox"
            name="check"
            checked={props.item.completed}
            onChange={() => dispatch(toggleStatus(props.item.id))}
          />
        </div>
        <button
          onClick={() => dispatch(removeTodo(props.item.id))}
          className="p-2 bg-red-500 rounded-full text-white"
        >
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default Todo;
