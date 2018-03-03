import React from "react";
import style from "./TodoList.css";
import Todo from "./Todo.js";

const TodoList = props => {
  const lists = props.data.map(todo => (
    <li key={todo.id}>
      {todo.text} <button onClick={() => props.remove(todo.id)}>Usuń</button>
    </li>
  ));

  return (
    <div className={style.TodoList}>
      <ul>{lists}</ul>
    </div>
  );
};

export default TodoList;
