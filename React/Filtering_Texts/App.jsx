// Filtering Texts

import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let words= ["Hi", "i",  "am", "fine"]
let lines= 100
let final= []

// Creating 100 lines
for (let i= 0; i<lines; i++)
{
  let sentence= ""
  for (let j= 0; j<words.length; j++)
  {
    sentence+= (words[Math.floor(Math.random() * words.length)])
    sentence+= " "
  }
  final.push(sentence)
}
  return (
    <>
    <Component final= {final}></Component>
    </>
  )
}

function Component({final})
{
  const divRef= useRef()
  let [tofind, settofind]= useState("")

  const render= (value) => {
    let filtered= final.filter((sentence) => {
    return sentence.includes(value)
    })

    divRef.current.innerHTML= filtered
  }

  return <div>
    <input type= "text" placeholder= "Search" onInput= {((e) => {
      settofind(e.target.value)
      render(e.target.value)
    })}></input>
    <div ref= {divRef}>{final}</div>
  </div>
}

export default App
