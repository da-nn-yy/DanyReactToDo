import { useState } from 'react'
import './styles.css'

export default function App() {
  const [newItem,setNewItem] = useState("")
  const [todos,setTodos] = useState([])


  const handleSubmit = (e) =>{
     e.preventDefault()

     setTodos(currentTodo => {
       return [
       ...currentTodo , 
       {id:crypto.randomUUID(), title:newItem, completed: false },
      ]
    })
     
  }
  return (
   <>
    <form onSubmit={handleSubmit} className='new-item-form' action="">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)}  
          type="text" 
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list"> 
      <li>
        <label>
          <input type="checkbox"/>
          Item 1
        </label>
        <button className="btn btn-delete">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox"/>
          Item 2
        </label>
        <button className="btn btn-delete">Delete</button>
      </li>
    </ul>
   </>
  )
}
