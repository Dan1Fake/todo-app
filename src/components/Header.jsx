export function Header(props) {
  const todos = props.todos;
  const openTodosLength = todos.filter((task) => !task.completed).length;
  return (
    <header>
      <h1 className="text-gradient">
        You have {openTodosLength} open{" "}
        {
          /* checks if tasks are plural or singular*/
          openTodosLength === 1 ? "task" : "tasks"
        }
        .
      </h1>
    </header>
  );
}
