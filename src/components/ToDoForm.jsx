import { useState } from "react";

const ToDoForm = ({ toDos, setTodos }) => {
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
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="input__wrapper">
        <div className="input-box">
          <label htmlFor="title">
            <strong>Title</strong>
          </label>
          <input className="input" id="title" type="text" value={title} onChange={handleTitle} />
        </div>
        <div className="input-box">
          <label htmlFor="content">
            <strong>Content</strong>
          </label>
          <input className="input" id="content" type="text" value={body} onChange={handleBody} />
        </div>
      </div>
      <button className="form-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
