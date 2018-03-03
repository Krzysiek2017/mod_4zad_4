import React from "react";
import style from "./Todo.css";

const Todo = props => {
  return (
    <li className={style.Todo}>
      {input.text}
      <button onClick={() => props.remove(todo.id)}>Usuń</button>
    </li>
  );
};

export default Todo;

