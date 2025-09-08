import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title:"t1", description: "d1"
  },{
    title:"t2", description: "d2"
  },{
    title:"t3", description: "d3"
  }])

  

  return (
    <div>
      <div>
        {JSON.stringify(todos)}  // Todos is an array so stringifying
      </div>
      <br/>
      <div>
        <Button todos={todos} setTodos={setTodos}></Button>
      </div>
      <div>
        {todos.map(function(todos)
        {
          return <Todo title= {todos.title} description= {todos.description}></Todo>
        })}
      </div>  
    </div>
  )
}

function Todo(props)
{
  return (<div>
    <div>
      <p>Title: {props.title}</p>
    </div>
    <div>
      <p>Description: {props.description}</p>
    </div>
    <br/>
  </div>)
}

function Button(props)
{
  function f()
  {
    props.setTodos([...props.todos, {
      title:"t",description:"d"
    }])
  }

  return (<button onClick={f}>Add todo</button>)
}

export default App
