const TODOS_KEY = "TODOS_KEY";

export class DataStorage {
  static getTodos() {
    const todos = localStorage.getItem(TODOS_KEY);
    if (todos) {
      return JSON.parse(todos);
    } else {
      return getDefaultTodos();
    }
  }

  static setTodos(todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }
}
export function getDefaultTodos() {
  return [
    { id: 1, title: "Buy cookies" },
    { id: 2, title: "Buy chocolate" },
    { id: 3, title: "Buy tea" },
    { id: 4, title: "Cleaning" },
    { id: 5, title: "Coding" },
  ];
}
