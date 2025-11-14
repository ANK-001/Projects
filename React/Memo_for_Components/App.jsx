import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [title, setTitle]= useState("My name is A")

    function b()
    {
      setTitle(() => title= "My name was, is, and will be "+ Math.random())
    }

  return (
    <div>
    <button onClick= {b}>CLick me to change the title </button>
    <T title={title}></T>
    <T title= "Static"></T>
    <T title= "Static"></T>
    <T title= "Static"></T>
    <T title= "Static"></T>
    </div>
  )
}

const T= React.memo(function T({title}){
  console.log("Rendered:", title);
  return <div>
    <div>{title}</div>
  </div>
}
)

export default App
