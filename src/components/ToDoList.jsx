const ToDoList = ({ toDos, setTodos, listIsDone }) => {
  // 스타일
  const styleUl = {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-start",
  };

  const styleLi = {
    width: "300px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: listIsDone ? "3px solid green" : "3px solid black",
    borderRadius: "10px",
    padding: "15px",
    boxSizing: "border-box",
  };

  // const buttonStyle = {
  //   width: "130px",
  //   height: "50px",
  // };

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

  return (
    <section>
      <h2>{listIsDone ? "Done" : "Working"}</h2>
      <ul style={styleUl} className="working-list">
        {toDos
          .filter((todo) => {
            return todo.isDone === listIsDone;
          })
          .map((todo) => {
            return (
              <li key={todo.id} style={styleLi}>
                <div style={{ width: "100%", height: "110px" }}>
                  <h3 style={{ fontWeight: "600", fontSize: "20px" }}>{todo.title}</h3>
                  <h4 style={{ fontWeight: "500", fontSize: "15px" }}>{todo.body}</h4>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button
                    style={{ width: "130px", backgroundColor: "black", color: "white" }}
                    onClick={() => removeToDo(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    style={{
                      width: "130px",
                      border: listIsDone ? "2px solid black" : "2px solid #FF6347",
                      color: listIsDone ? "black" : "#FF6347",
                    }}
                    onClick={() => {
                      handleToggleButton(todo.id);
                    }}
                  >
                    {todo.isDone ? "Cancel" : "Complete"}
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default ToDoList;
