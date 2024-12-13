import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTodos() {
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function resetTodos() {
    setTodos([]);
  }

  function removeTodo() {
    setTodos;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodos}>Add Todo</button>
      <button onClick={resetTodos}>Reset</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>removeTodo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
