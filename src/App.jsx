import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import "./App.css";
import ToDoList from "./ToDoList";
// import "./Reset.css";

const App = () => {
  const initialState = [{ id: 0, title: "", body: "", isDone: false }];
  const [toDos, setTodos] = useState(initialState);

  const style = {
    maxWidth: "1200px",
    minWidth: "800px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  };

  const styleMain = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "40px",
  };

  return (
    <div style={style}>
      <Header />
      <Form toDos={toDos} setTodos={setTodos} />
      <main style={styleMain}>
        <ToDoList toDos={toDos} setTodos={setTodos} listIsDone={false} />
        <ToDoList toDos={toDos} setTodos={setTodos} listIsDone={true} />
      </main>
    </div>
  );
};

export default App;
