

const DanTodoItems = ({completed,id,title,toggleTodo,deleteTodo}) => { //this parametrs are props 
  return (
    <>
       <li > 
        <label>
          <input type="checkbox" checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button 
        onClick={() => deleteTodo(id)} 
          className="btn btn-delete">
          Delete
        </button>
      </li>
    </>
  )
}

export default DanTodoItems
