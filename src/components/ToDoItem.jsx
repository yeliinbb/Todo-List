const ToDoItem = ({ toDos, setTodos, listIsDone }) => {
  const removeToDo = (id) => {
    // 선택한 id를 제외한 나머지 배열만 새롭게 넣어줌.
    const delToDos = toDos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(delToDos);
  };

  const handleToggleButton = (id) => {
    // if 대신 삼항연산자 활용가능
    const completeToDos = toDos.map((todo) => {
      if (todo.id === id) {
        //todo.id와 내가 선택한 요소의 id가 일치하면
        return { ...todo, isDone: !todo.isDone }; // isDone을 반대로 바꿔줌
      } else return todo;
    });
    setTodos(completeToDos);
  };

  const { id, title, body, isDone } = toDos;
  return (
    <>
      <div className="todo-content__box">
        <h3 className="todo-title">{title}</h3>
        <h4 className="todo-content">{body}</h4>
      </div>
      <div className="btn__box">
        <button className="remove-btn" onClick={() => removeToDo(id)}>
          Delete
        </button>
        <button
          style={{
            border: listIsDone ? "2px solid black" : "2px solid #FF6347",
            color: listIsDone ? "black" : "#FF6347",
          }}
          className="complete-cancel-btn"
          onClick={() => {
            handleToggleButton(id);
          }}
        >
          {isDone ? "Cancel" : "Complete"}
        </button>
      </div>
    </>
  );
};

export default ToDoItem;