import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, selectedTab } = props;

  const filterTodoList =
    selectedTab === "All" ? todos :
      selectedTab === "Completed" ? todos.filter((val) => val.completed) :
        todos.filter((val) => !val.completed);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.indexOf(todo)}
            {...props}
            todo={todo} />
        )
      })}
    </>
  );
}
