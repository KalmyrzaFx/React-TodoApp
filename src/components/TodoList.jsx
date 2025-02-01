import { TodoCard } from "./TodoCard"

export function TodoList(props) {
    const { todos, selectedTab} = props

    const todosWithIndexes = todos.map((todo, index) => (
        {...todo, originalIndex: index}
    ))
    
    const filterTodosList = selectedTab === 'All' ?
        todosWithIndexes :
        selectedTab === 'Completed'
            ? todosWithIndexes.filter(val => val.complete)
            : todosWithIndexes.filter(val => !val.complete)
    return (
        <>
            {filterTodosList.map((todo) => {
                return (
                    <TodoCard
                        key={todo.originalIndex}
                        todoIndex={todo.originalIndex}
                        todo={todo} 
                        {...props} 
                    />
                )
            })}
        </>
    )
}