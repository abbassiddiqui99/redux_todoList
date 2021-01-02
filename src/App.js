import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, content: "buy milk" },
    { id: 2, content: "play cricket" },
  ]);
  return (
    <div>
      <Todo todoList={todoList} />
    </div>
  );
}

export default App;
