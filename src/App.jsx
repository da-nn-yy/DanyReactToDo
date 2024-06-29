import './App.css'
import './styles.css'
import  { useState } from 'react';

function App() {

  const [newTask,setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
    

  }
  return (
    <>
    <h1>Enuty Page</h1>
    <input type="text" onChange={handleChange}/>

    <p>{newTask}</p>
    </>
  )
}

export default App
