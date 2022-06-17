import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import TodoService from './../services/TodoService';
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
    addTodo: (state: Todo[], action: PayloadAction<Todo>): void => {
      state.push(action.payload);
    },

    removeTodo: (state: Todo[], action: PayloadAction<string>): Todo[] => {
      return state.filter((obj) => obj.id !== action.payload);
    },

    clearTodos: (state: Todo[]): Todo[] => {
      return [];
    },

    toggleStatus: (state: Todo[], action: PayloadAction<string>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, clearTodos, toggleStatus } =
  TodoSlice.actions;

export default TodoSlice.reducer;
