import React from 'react';

const NewTodo = () => {
  return (
    <div className="sm:py-5 sm:px-12 py-4 px-4 max-w-3xl mx-auto">
      <form className="bg-blue-600 rounded-md py-3 px-3 text-white dark:bg-blue-400 dark:text-gray-800">
        <h1 className="font-semibold text-xl mb-4">Add New Todo</h1>
        <div>
          <label htmlFor="todoTitle" className="block italic mb-2 font-medium">
            Title:{' '}
          </label>
          <input
            className="w-full px-2 py-2 text-black rounded-md border-4 mb-3 border-blue-800 outline-none dark:bg-gray-800 dark:text-white"
            type="text"
            name="todoTitle"
            placeholder="Enter title..."
            id="todoTitle"
            autoComplete="off"
          />
        </div>
        <div>
          <label
            htmlFor="todoDescription"
            className="block italic mb-2 font-medium"
          >
            Description:{' '}
          </label>
          <input
            className="w-full px-2 py-2 text-black rounded-md border-4 mb-3 border-blue-800 outline-none dark:bg-gray-800 dark:text-white"
            type="text"
            name="todoDescription"
            placeholder="Enter description..."
            id="todoDescription"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-md dark:text-blue-900 dark:border-blue-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
