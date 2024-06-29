import { useState } from 'react'
import './styles.css'
import DanTodoForm from '../components/DanTodoForm'
import TodoList from '../components/TodoList'
import DanTodoItems from '../components/DanTodoItems'

export default function App() {
  const [todos,setTodos] = useState([])

const addTodo = (title) => {
  setTodos(currentTodos => {
       return [
       ...currentTodos, 
       {id:crypto.randomUUID(), title, completed: false },
      ]
    })
}
  

  const toggleTodo = (id,completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo ,completed}
        }
        return todo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return(currentTodos.filter(todo => todo.id != id))
    })
  } 
  return (
   <>
    <DanTodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    
   </>
  )
}
 