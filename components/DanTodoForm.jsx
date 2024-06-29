import { useState } from "react"

const DanTodoForm =() => {
  const [newItem,setNewItem] = useState("")
  

   const handleSubmit = (e) =>{
     e.preventDefault()
     
     addTodo(newItem)

     setNewItem("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form' action="">
      <div className="form-row">
        <label htmlFor="item"><h3>New Item</h3></label>
        <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)}  
          type="text" 
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
    </>
  )
}

export default DanTodoForm
