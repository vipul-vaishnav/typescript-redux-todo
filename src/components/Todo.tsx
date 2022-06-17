import React from 'react';
import CheckIcon from '../Icons/CheckIcon';
import DeleteIcon from '../Icons/DeleteIcon';
import TodoInterface from './../models/Todo';
import { useDispatch } from 'react-redux';
import { removeTodo } from './../store/TodoSlice';

interface TodoProps {
  item: TodoInterface;
}

const Todo = (props: TodoProps) => {
  const dispatch = useDispatch();
  return (
    <li className="py-3 px-4 mb-2 border-2 border-gray-300 rounded-md">
      <h2 className="font-bold text-2xl mb-3">{props.item.title}</h2>
      <p className="font-medium text-md mb-3">{props.item.description}</p>
      <div className="flex justify-between items-center">
        <p className="font-medium text-sm mb-3 mt-1">{props.item.createdAt}</p>
        <div className="flex justify-center items-center gap-4">
          <div>
            <label
              htmlFor="check"
              className={
                props.item.completed
                  ? 'bg-green-500 text-white p-2 rounded-full block cursor-pointer'
                  : 'bg-gray-300 text-black p-2 rounded-full block cursor-pointer'
              }
            >
              <CheckIcon />
            </label>
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={props.item.completed}
              onChange={(e) => console.log(e.target.value)}
              hidden={true}
            />
          </div>
          <button
            onClick={() => dispatch(removeTodo(props.item.id))}
            className="p-2 bg-red-500 rounded-full text-white"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
