import { useState } from "react";

const Form = ({ toDos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (title === "" || body === "") {
      alert("제목과 내용이 입력되지 않았습니다.");
      return;
    }

    const newToDo = {
      id: Date.now(),
      title: title,
      body: body,
      isDone: false,
    };

    setTodos([...toDos, newToDo]);
    setTitle("");
    setBody("");
  };

  return (
    <form style={styleForm} onSubmit={onSubmitHandler}>
      <div style={styleInputWrapper}>
        <div style={styleInputDiv}>
          <label htmlFor="title">
            <strong>Title</strong>
          </label>
          <input style={styleInput} id="title" type="text" value={title} onChange={handleTitle} />
        </div>
        <div style={styleInputDiv}>
          <label htmlFor="content">
            <strong>Content</strong>
          </label>
          <input style={styleInput} id="content" type="text" value={body} onChange={handleBody} />
        </div>
      </div>
      <button style={styleButton} type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;

// 스타일
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
  gap: "20px",
};

const styleInputDiv = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
};

const styleInput = {
  width: "200px",
  height: "30px",
  borderRadius: "5px",
  border: "none",
};

const styleButton = {
  backgroundColor: "green",
  color: "white",
};
