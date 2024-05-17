const ToDoItem = ({ todo, setTodos }) => {
  const { id, title, body, isDone } = todo;

  const removeToDo = () => {
    // 선택한 id를 제외한 나머지 배열만 새롭게 넣어줌.
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleButton = () => {
    //todo.id와 내가 선택한 요소의 id가 일치하면 isDone을 반대로 바꿔줌
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  return (
    <li
      key={id}
      style={{
        border: isDone ? "2.5px solid green" : "2.5px solid #FF6347",
      }}
      className="todo-list"
    >
      <div className="todo-content__box">
        <h3 className="todo-title">{title}</h3>
        <p className="todo-content">{body}</p>
      </div>
      <div className="btn__box">
        <button className="remove-btn btn" onClick={removeToDo}>
          Delete
        </button>
        <button
          style={{
            backgroundColor: isDone ? "green" : "#FF6347",
          }}
          className="complete-cancel-btn btn"
          onClick={handleToggleButton}
        >
          {isDone ? "Cancel" : "Complete"}
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
