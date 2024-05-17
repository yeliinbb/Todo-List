const ToDoForm = ({ setTodos }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();

    // 비제어 컴포넌트로 submit 이벤트 관리
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const body = formData.get("body");

    if (!title.trim() || !body.trim()) {
      alert("제목과 내용이 입력되지 않았습니다.");
      return;
    }

    const nextToDo = {
      id: Date.now(),
      title,
      body,
      isDone: false,
    };
    // 기존의 값을 가져와서 변경시켜주기 위해 setTodos안에 콜백함수 넣어주기
    setTodos((prevToDos) => [nextToDo, ...prevToDos]);
    // submit 후 title과 content 인풋 창 비워주기
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="input__wrapper">
        <div className="input-box">
          <label htmlFor="title">
            <strong>Title</strong>
          </label>
          <input id="title" type="text" name="title" />
        </div>
        <div className="input-box">
          <label htmlFor="content">
            <strong>Content</strong>
          </label>
          <input id="content" type="text" name="body" />
        </div>
      </div>
      <button className="form-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
