import { useState } from "react";

const App = () => {
  const initialState = [{}];
  const [toDos, setTodos] = useState(initialState);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addToDo = (event) => {
    event.preventDefault();

    if (title === "" || content === "") {
      alert("제목과 내용이 입력되지 않았습니다.");
      return;
    }

    const newToDo = {
      id: new Date().getTime(),
      title: title,
      content: content,
    };

    setTodos([...toDos, newToDo]);
  };

  const removeToDo = (id) => {
    const delToDos = toDos.filter((todo) => {
      return todo.is !== id;
    });
    setTodos(delToDos);
  };

  const completeToDo = () => {};

  const style = {
    maxWidth: "1200px",
    minWidth: "800px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  const styleHeader = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const styleForm = {
    width: "100%",
    height: "90px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ebebeb",
    padding: "15px",
    boxSizing: "border-box",
  };

  const styleInputWrapper = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const styleInput = {
    display: "flex",
    gap: "7px",
  };

  const styleButton = {
    backgroundColor: "green",
    color: "white",
  };

  const styleMain = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "40px",
  };

  const styleUl = {
    display: "flex",
    gap: "10px",
  };

  return (
    <div style={style}>
      <header style={styleHeader}>
        <h1>My Todo List</h1>
        <span>React</span>
      </header>
      <form style={styleForm} onSubmit={addToDo}>
        <div style={styleInputWrapper}>
          <div style={styleInput}>
            <label htmlFor="title">
              <strong>Title</strong>
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div style={styleInput}>
            <label htmlFor="content">
              <strong>Content</strong>
            </label>
            <input
              id="content"
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
        </div>
        <button style={styleButton} type="submit">
          Add
        </button>
      </form>
      <main style={styleMain}>
        <section>
          <h2>Working</h2>
          <ul style={styleUl}>
            {toDos.map((todo) => {
              return <ToDo key={todo.id} todo={todo} removeToDo={removeToDo} />;
            })}
          </ul>
        </section>
        <section>
          <h2>Done</h2>
          <ul style={styleUl}>
            {toDos.map((todo) => {
              return <ToDo key={todo.id} todo={todo} completeToDo={completeToDo} />;
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;

const ToDo = ({ todo, removeToDo, completeToDo }) => {
  const styleLi = {
    width: "300px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "2px solid green",
    borderRadius: "10px",
    padding: "15px",
    boxSizing: "border-box",
  };

  const { title, content, id } = todo;

  return (
    <li style={styleLi}>
      <div>
        <h3 style={{ fontWeight: "600", fontSize: "20px" }}>{title}</h3>
        <h4 style={{ fontWeight: "500", fontSize: "15px" }}>{content}</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button style={{ width: "130px", backgroundColor: "black", color: "white" }} onClick={() => removeToDo(id)}>
          Delete
        </button>
        <button style={{ width: "130px", border: "2px solid black" }} onClick={() => completeToDo(id)}>
          Complete
        </button>
      </div>
    </li>
  );
};
