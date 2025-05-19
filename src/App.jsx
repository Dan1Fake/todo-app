import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import { useEffect, useState } from "react"

function App() {
  // const todos = [
  //   { input: "Hello1", completed: true },
  //   { input: "Hello2", completed: false },
  //   { input: "Hello3", completed: false },
  // ];

  const [todos, setTodos] = useState([])
  const [selectedTab, setSelectedTab] = useState("Open")

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, completed: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    newTodoList[index].completed = true
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) { return }
    let db = []
    db = JSON.parse(localStorage.getItem("todo-app"))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TodoList todos={todos} selectedTab={selectedTab}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
