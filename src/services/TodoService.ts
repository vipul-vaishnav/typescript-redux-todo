import Todo from './../models/Todo';

class TodoService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): Todo[] {
    this.todos.push(todo);
    return this.todos;
  }

  removeTodo(id: string): Todo[] {
    return this.todos.filter((todo) => todo.id !== id);
  }

  toggleCompleted(id: string): boolean {
    return !this.todos.find((todo) => todo.id === id)?.completed;
  }
}

export default new TodoService();
