import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "^",
    "^",
    "^",
    "^",
    "^",
    "^",
    "^",
    "^",
    "^"
  ])

  const handleClick = (id) => {
    board[id]="♢"
    setBoard([...board])

  }

  return (
    <>
      <h1>try your luck...</h1>
      <Square board={board} handleClick={handleClick}/>
      
    </>
  )
}

export default App
