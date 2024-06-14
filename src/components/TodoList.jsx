import TodoItem from "./TodoItem"
import styles from "./todolist.module.css"
export default function TodoList(props){
    const { todos, setTodos } = props
    return (
        <div className={styles.list}>
         {todos.map((todo,todoIndex)=>{ 
            return <TodoItem key={todo.name+todoIndex} 
                            todo={todo} 
                            todoIndex={todoIndex} 
                            setTodos={setTodos} 
                            todos={todos} /> 
                        })}
        </div>
    )
}