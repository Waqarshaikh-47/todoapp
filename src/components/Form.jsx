import styles from "./form.module.css"

export default function Form(props){
    const {todos, todo, setTodo, setTodos } = props
    function handleSubmit(event){
        event.preventDefault()
        setTodos([...todos,todo])
        setTodo({ name:'', done:false })
    }

    return (
        <form className={styles.todoform} onSubmit={(event)=>handleSubmit(event)}>
            <div className={styles.inputContainer}>
            <input placeholder="Enter todo item..." className={styles.modernInput} type="text" value={todo.name} onChange={(event)=>{setTodo({...todo,name:event.target.value})}} />
            <button className={styles.modernButton} type="submit">Add</button>
            </div>
        </form>
    )
}