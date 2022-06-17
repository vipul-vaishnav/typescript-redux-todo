import Todo from './../models/Todo';

interface TodoClassInterface {
  todos: Todo[];
  getAllTodos: () => Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => Todo[];
  toggleCompleted: (id: string) => boolean;
}

class TodoService implements TodoClassInterface {
  todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  removeTodo(id: string): Todo[] {
    return this.todos.filter((todo) => todo.id !== id);
  }

  toggleCompleted(id: string): boolean {
    return !this.todos.find((todo) => todo.id === id)?.completed;
  }
}

export default new TodoService();
