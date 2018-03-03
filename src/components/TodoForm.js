import React from "react";
import style from "./TodoForm.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }
  newTask(val) {
    this.setState({ inputText: val });
  }

  render() {
    return (
      <form className={style.TodoForm} onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="nowe zadanie"
          onChange={event => this.newTask(event.target.value)}
        />
        <button onClick={() => this.props.add(this.state.inputText)}>
          Dodaj
        </button>
      </form>
    );
  }
}

export default TodoForm;
