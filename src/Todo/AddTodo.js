import React, { useState } from "react";

const styles = {
  input: {
    marginRight: "1rem",
    border: "3px solid pink",
    boxShadow: "0px 0px 0px 1px black",
    borderRadius: "15px",
    padding: "10px",
    outline: "none",
    width: "200px",
  },
  button: {
    cursor: "pointer",
    border: "1px solid #000",
    borderRadius: "20px",
    color: "#000",
    fontFamily: "Fuggles",
    fontSize: "26px",
    fontWeight: "bold",
    backgroundColor: "#FADADD",
    padding: "5px",
    width: "100px",
  },
};

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }
  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input style={styles.input} {...input.bind} />
      <button style={styles.button} type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
