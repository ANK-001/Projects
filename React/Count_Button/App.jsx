import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()
{
  const [count, setCount]= useState(0)  // Within App return
  const [count1, setCount1]= useState(0)  // Real Component

  function f()
  {
    setCount(() => count+1)
  }
  return (
    <div>
      <div>
        <button onClick= {f}>Count is {count}</button>
      </div>
      <br/>
      <div>
        <Component count1= {count1} setCount1= {setCount1}></Component>
      </div>
      
    </div>
  )
}

function Component(props)
{
  function call()
  {
    props.setCount1(() => props.count1+1)
  }

  return (<button onClick={call}>Count is {props.count1}</button>)
}

export default App
