import { useState } from "react";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDoContainer = () => {
  const initialState = [
    { id: 0, title: "todo #1", body: "todo #1", isDone: false },
    { id: 1, title: "todo #2", body: "todo #2", isDone: true },
  ];
  const [toDos, setTodos] = useState(initialState);

  // 다른 값의 데이터 전달해주기
  const workingToDos = toDos.filter((todo) => !todo.isDone); // isDone이 false인 것만 담긴 배열
  const doneToDos = toDos.filter((todo) => todo.isDone); // isDone이 true인 것만 담긴 배열

  return (
    <div className="todo-container">
      <Header />
      <ToDoForm setTodos={setTodos} />
      <div className="todo-list__wrapper">
        <ToDoList title="Working" toDos={workingToDos} setTodos={setTodos} />
        <ToDoList title="Done" toDos={doneToDos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default ToDoContainer;
