import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Todo from './../models/Todo';

const initialState: Todo[] = [
  {
    id: '1',
    title: 'This is a task',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, debitis eum laboriosam culpa temporibus dolores odio quam dolor totam quis?',
    createdAt: new Date().toLocaleString(),
    completed: false,
  },
  {
    id: '2',
    title: 'This is another task',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, debitis eum laboriosam culpa temporibus dolores odio quam dolor totam quis?',
    createdAt: new Date().toLocaleString(),
    completed: true,
  },
  {
    id: '3',
    title: 'This is one another task',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, debitis eum laboriosam culpa temporibus dolores odio quam dolor totam quis?',
    createdAt: new Date().toLocaleString(),
    completed: false,
  },
];

const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addTodo: (state: Todo[], action: PayloadAction<Todo>): Todo[] => {
      return [...state, action.payload];
    },

    removeTodo: (state: Todo[], action: PayloadAction<string>): Todo[] => {
      return state.filter((obj) => obj.id !== action.payload);
    },

    clearTodos: (state: Todo[]): Todo[] => {
      return [];
    },

    toggleStatus: (state: Todo[], action: PayloadAction<string>): void => {
      const todo = state.find((obj) => obj.id === action.payload);
      const index = state.findIndex((obj) => obj.id === action.payload);
      if (todo?.completed === true) todo.completed = false;
      else if (todo?.completed === false) todo.completed = true;
      const todosPrev = state.slice(0, index);
      const todosPost = state.slice(index + 1);
      void [...todosPrev, todo, ...todosPost];
    },
  },
});

export const { addTodo, removeTodo, clearTodos, toggleStatus } =
  TodoSlice.actions;

export default TodoSlice.reducer;
