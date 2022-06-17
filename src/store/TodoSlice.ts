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

    removeTodo(state: Todo[], action: PayloadAction<string>): Todo[] {
      return state.filter((obj) => obj.id !== action.payload);
    },

    // toggleCompleted(state: Todo[], action: PayloadAction<string>): boolean {
    //   return !state.find((obj) => obj.id === action.payload)?.completed;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
