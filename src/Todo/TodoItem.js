import React, { useContext } from "react";
import { TodoListContext } from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #000",
    borderRadius: "5px",
    backgroundColor: "#FADADD",
    marginBottom: ".5rem",
    fontFamily: "Marck Script",
    fontSize: "24px",
  },
  input: {
    marginRight: "1rem",
  },
  strong: {
    fontFamily: "Fuggles",
    fontSize: "26px",
  },
  btnRemove: {
    backgroundColor: "#6c6c6c",
    border: "1px solid #6c6c6c",
    color: "pink",
    borderRadius: "5px",
    boxShadow: "0px 0px 2px 1px #6c6c6c, 0px 0px 2px 1px #6c6c6c",
    fontWeight: "bold",
    fontSize: "18px",
    cursor: "pointer",
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(TodoListContext);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong style={styles.strong}>{index + 1}</strong>
        &#46; &nbsp;
        {todo.title}
      </span>
      <button style={styles.btnRemove} onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}

export default TodoItem;
