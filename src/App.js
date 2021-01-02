import React, { useState } from "react";
import AddItems from "./AddItems";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy milk" },
    { id: 2, content: "play cricket" },
    { id: 3, content: "cricket" },
    { id: 4, content: "play" },
  ]);
  const deleteItemHandler = (id) => {
    // console.log(id);
    const todoRemove = todos.filter((todo) => {
      return todo.id !== id;
    });
    console.log(todoRemove);
    setTodos(todoRemove);
  };

  const addItemHandler = (item) => {
    const newItem = { id: new Date().getTime(), content: item };
    setTodos([...todos, newItem]);
  };

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todo todos={todos} deleteItemHandler={deleteItemHandler} />
      <AddItems addItemHandler={addItemHandler} />
    </div>
  );
}

export default App;
