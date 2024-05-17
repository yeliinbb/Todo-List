import ToDoItem from "./ToDoItem";

const ToDoList = ({ title, toDos, setTodos }) => {
  return (
    <section>
      <h2 className="list-title">{title}</h2>
      <ul className="todo-list__box">
        {toDos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </section>
  );
};

export default ToDoList;
