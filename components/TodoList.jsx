import DanTodoItems from "./DanTodoItems"

const TodoList = ( {todos} ) => {
  
  


  return (
    <>
    <ul className="list"> 
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <DanTodoItems // id={todo.id} // completed={todo.completed}  title={todo.title}    OR  SIMPLY
          {...todo}
          key={todo.id}
          />
        )
      })}
    </ul>
    </>
  )
}

export default TodoList
