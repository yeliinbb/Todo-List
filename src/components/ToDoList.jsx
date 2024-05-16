import Item from "./Item";

const ToDoList = ({ toDos, listIsDone }) => {
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
                <Item />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default ToDoList;
