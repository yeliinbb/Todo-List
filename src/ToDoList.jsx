const ToDoList = ({ toDos, setTodos, listIsDone }) => {
  const removeToDo = (id) => {
    const delToDos = toDos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(delToDos);
  };

  const handleToggleButton = (id) => {
    const completeToDos = toDos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
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
                    style={{ width: "130px", border: "2px solid #FF6347", color: "#FF6347" }}
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
  border: "3px solid black",
  borderRadius: "10px",
  padding: "15px",
  boxSizing: "border-box",
};
