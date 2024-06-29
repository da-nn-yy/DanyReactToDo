import { useEffect, useState } from 'react'
import './styles.css'
import DanTodoForm from '../components/DanTodoForm'
import TodoList from '../components/TodoList'


export default function App() {
  const [todos,setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('DanItems')
    if(storedTodos == null) return []

    return JSON.parse(storedTodos)
  })

  useEffect(() => {
    localStorage.setItem('DanItems',JSON.stringify(todos))
  },[todos])

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
 