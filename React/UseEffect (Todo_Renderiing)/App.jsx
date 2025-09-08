// Printing a Rndom Todo on screen for every 2 secomds
// https://dummyjson.com/todos/random

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect( () => {
    setInterval( async () => {
      let response= await fetch("https://dummyjson.com/todos/random")
      let json= await response.json()
      setTodos([json])
    }, 2000)
  }, [])

  return (
    <>
    <Render todos= {todos}></Render>
    </>
  )
}

function Render({todos})  // Destructuring todos directly tp prevent props.todos if used props as func arg
{
  return <div>
  {
    todos.map( (todos) => {
      return <div>
      <div>id: {todos.id}</div>
      <div>Todo: {todos.todo}</div>
      <div>Completed: {todos.completed.toString()}</div>
      </div>
    })
  }
  
  </div>
}

export default App
