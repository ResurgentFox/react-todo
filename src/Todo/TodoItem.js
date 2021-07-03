import React, { useContext } from "react";
import { MyFirstContext } from "../context";

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
    fontFamily: "Parisienne, Marck Script",
    fontSize: "24px",
  },
  input: {
    marginRight: "1rem",
  },
  strong: {
    fontFamily: "Fuggles",
    fontSize: "26px",
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(MyFirstContext);
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
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

export default TodoItem;
