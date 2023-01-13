import React,{useState} from 'react'

export default function Counter() {
    
    console.log(useState("naqvi"))
    const [count, setCount]= useState(0)
    const [bgColor, setBgColor]= useState(true)

const incrementCounter=()=>{
    setCount(count+1)
    setBgColor(!bgColor)
}

  return (
    <div>
        <h1 style={{backgroundColor:bgColor ? "green":"red"}}>Counter : {count}</h1>
        <button onClick={incrementCounter}>increment</button>
    
    </div>
  )
}

