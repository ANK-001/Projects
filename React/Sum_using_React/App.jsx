//useState, useRef
//Complex logic in Without Button Component

import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [text1, setText1] = useState("")
  let [text2, setText2] = useState("")
  let [text3, setText3] = useState("")
  let [text4, setText4] = useState("")

  // With Button
  let ipRef1= useRef()
  let divRef1= useRef()

  const cursor1= (value) => {
    if (value.key=="Enter")
    {
      ipRef1.current.focus()
    }
  }

  // Without Button
  let ipRef2= useRef()
  let divRef2= useRef()

  const cursor2= (value) => {
    if (value.key=="Enter")
    {
      ipRef2.current.focus()
    }
  }

 
  return (
    <>
    <Component_Button  text1= {text1} text2= {text2} setText1= {setText1} setText2= {setText2} cursor1= {cursor1} ipRef1= {ipRef1} divRef1= {divRef1}></Component_Button>
    <Component_Without_Button text3= {text3} text4= {text4} setText3= {setText3} setText4= {setText4} cursor2= {cursor2} ipRef2= {ipRef2} divRef2= {divRef2}></Component_Without_Button>
    </>
  )
}



function Component_Button(props){

  function add()
  {
    let sum
    let text1= parseInt(props.text1)
    let text2= parseInt(props.text2)

    sum= text1+text2

    props.divRef1.current.innerHTML= "Sum is "+sum
  }

  return <div>
    <input type="text" placeholder= "First Number" onKeyDown={props.cursor1} onChange= {(e) => props.setText1(e.target.value)}></input>
    <br/>
    <br/>
    <input type="text" placeholder= "Second Number" ref= {props.ipRef1} onChange= {(e) => props.setText2(e.target.value)}></input>
    <br/>
    <br/>
    <button onClick= {add}>Add</button>
    <div ref= {props.divRef1}></div>
    <br/>
    <br/>
  </div>
}

function Component_Without_Button(props) {

  return <div>
    <input type="text" placeholder= "First Number" onKeyDown={props.cursor2} onChange= {(e) => {props.setText3(e.target.value)
    }}></input>
    <br/>
    <br/>
    <input type="text" placeholder= "Second Number" ref= {props.ipRef2} onChange= {(e) => {
    const value= e.target.value
    props.setText4(value)
    let sum= 0
    let text3= parseInt(props.text3)
    let text4= parseInt(value)

    sum= text3+text4
    
    props.divRef2.current.innerHTML= "Sum is "+sum
    }}></input>
    <br/>
    <div ref= {props.divRef2}></div>
  </div>

}

export default App
