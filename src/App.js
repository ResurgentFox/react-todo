import React from "react";
import TodoList from "./Todo/TodoList.js";
import { MyFirstContext } from "./context";
import AddTodo from "./Todo/AddTodo";

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

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Buy tea" },
    { id: 2, completed: false, title: "Buy sugar" },
    { id: 3, completed: false, title: "Buy cookies" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
    
    function addTodo(title) {
        setTodos(todos.concat([
            {
                title,
                id: Date.now(),
                completed: false
            }
        ]))
  }

  return (
    <MyFirstContext.Provider value={{ removeTodo }}>
      <div className="wrapper">
              <h1 style={styles.h1}>ToDo List  &#128396;</h1>
              <AddTodo onCreate={addTodo}/>
              {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p style={styles.p}> 	&#9825; Great! All tasks have been completed! Good job :3  	&#9825;</p> }
        
      </div>
    </MyFirstContext.Provider>
  );
}
