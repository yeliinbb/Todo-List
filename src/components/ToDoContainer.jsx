import { useState } from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
// import "./Reset.css";
// import "./App.css";

const ToDoContainer = () => {
  const initialState = [
    { id: 0, title: "todo #1", body: "todo #1", isDone: false },
    { id: 1, title: "todo #2", body: "todo #2", isDone: true },
  ];
  const [toDos, setTodos] = useState(initialState);

  return (
    <div className="todo-container">
      <Header />
      <ToDoForm toDos={toDos} setTodos={setTodos} />
      <div className="todo-list__wrapper">
        <ToDoList toDos={toDos} setTodos={setTodos} listIsDone={false} />
        <ToDoList toDos={toDos} setTodos={setTodos} listIsDone={true} />
      </div>
    </div>
  );
};

export default ToDoContainer;
