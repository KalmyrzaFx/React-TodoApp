export function TodoCard(props) {
    const { todo,
        todoIndex,
        handleDeleteTodo,
        handleCompleteTodo,
        editingIndex,
        setEditingIndex,
        editText,
        setEditText,
        handleSaveEdit,
    } = props

    const isEditing = editingIndex === todoIndex;


    return (
        <div className="card todo-item">
            {isEditing ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <p>{todo.input}</p>
            )}
            <div className="todo-buttons">
                <button
                    onClick={() => {
                        handleCompleteTodo(todoIndex)
                    }}
                    disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                
                {isEditing ? (
                    <button
                        onClick={() => handleSaveEdit()}
                        disabled={!editText.trim()}
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            setEditingIndex(todoIndex)
                            setEditText(todo.input)
                        }}
                        disabled={todo.complete}
                    >
                        Edit
                    </button>
                )}


                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}