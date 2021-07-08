import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList.js";
import { TodoListContext } from "./context";
import Loader from "./Loader";
import { DataStorage } from "./data-storage.js";

const styles = {
  h1: {
    fontFamily: "Fuggles",
    textAlign: "center",
    fontSize: "60px",
  },
  p: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "40px",
    fontFamily: "Fuggles",
    boxShadow: "1px 0px 15px 10px #FADADD, 1px 0px 25px 20px #FADADD",
    backgroundColor: "#FADADD",
    borderRadius: "15px",
  },
};

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./Todo/AddTodo"));
      }, 5000);
    })
);

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const todos = DataStorage.getTodos();
    setTimeout(() => {
      setTodos(todos);
      setLoading(false);
    }, 5000);
  }, []);

  function updateTodos(todos) {
    setTodos(todos);
    DataStorage.setTodos(todos);
  }

  function toggleTodo(id) {
    updateTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }

  function removeTodo(id) {
    updateTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    updateTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false,
      },
    ]));
  }

  return (
    <TodoListContext.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1 style={styles.h1}>ToDo List &#128396;</h1>
        <React.Suspense
          fallback={
            <p style={{ fontFamily: "Marck Script", fontSize: "34px" }}>
              Loading...
            </p>
          }
        >
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p style={styles.p}>
            {" "}
            &#9825; Great! All tasks have been completed! Good job :3 &#9825;
          </p>
        )}
      </div>
    </TodoListContext.Provider>
  );
}
