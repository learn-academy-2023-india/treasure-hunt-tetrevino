import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleClick = (id) => {

    let treasureLocation = Math.floor(Math.random() * board.length)
    let bombLocation = Math.floor(Math.random() * board.length)

    if(treasureLocation === id){
      board[id] = "♦︎"
      setBoard([...board])
    }else if(bombLocation === id){
      board[id]="♢"
    setBoard([...board])
    }else{
      board[id]="◉"
      setBoard([...board])
    }
    

  }

  return (
    <>
      <h1>try your luck...</h1>
      <Square board={board} handleClick={handleClick}/>
      <button className="grid">restart</button>
      
    </>
  )
}

export default App
