export function TodoCard(props) {
    const { todo, todoIndex, handleCompleteTodo, handleDeleteTodo } = props
    return (
        <div className="card todo-item">
            <div className="todo-buttons">
                <p>{todo.input}</p>
                <button onClick={() => {
                    handleCompleteTodo(todoIndex)
                }} disabled={todo.completed}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}