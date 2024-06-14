import styles from "./todoitem.module.css"


export default function TodoItem(props){
    const { todos, todo, todoIndex , setTodos } = props
    function deleteTodo(todoIndex){
        let todosClone = [...todos]
        todosClone.splice(todoIndex,1)
        setTodos(todosClone)
    }
    const updateDoneTodo = (todoIndex)=>{
        let updateTodos = [...todos] 
        updateTodos[todoIndex].done = !updateTodos[todoIndex].done
        setTodos(updateTodos)

    }
    return <div className={styles.item}>
        <div className={styles.todoName}>
        <h3>
            <span onClick={()=>updateDoneTodo(todoIndex)} className={todo.done ? styles.completed : ''}>
            {todo.name}
            </span>
            <span>
            <button onClick={()=>deleteTodo(todoIndex)} className={styles.deleteButton}>
                x
            </button>
        </span>
        </h3>
        </div>
        <hr className={styles.line}/>
    </div>


}