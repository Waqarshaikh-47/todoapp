import { useState } from "react"
import Form from "./Form"
import TodoList from "./TodoList"
import Footer from "./Footer"

export default function Todo(){
    const [todo,setTodo] = useState({name:'',done:false})
    const [todos,setTodos] = useState([])
    const complatedTodos = todos.filter((todo)=>todo.done).length
    const totalTodos = todos.length
    return <div> 
        <Form todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <Footer complatedTodos={complatedTodos} totalTodos={totalTodos} />
    </div>
}