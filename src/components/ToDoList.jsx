import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, listIsDone }) => {
  return (
    <section>
      <h2>{listIsDone ? "Done" : "Working"}</h2>
      <ul className="todo-list__wrapper">
        {toDos
          .filter((todo) => {
            return todo.isDone === listIsDone;
          })
          .map((todo) => {
            return (
              <li
                key={todo.id}
                style={{
                  border: listIsDone ? "3px solid green" : "3px solid black",
                }}
                className="todo-list"
              >
                <ToDoItem />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default ToDoList;
