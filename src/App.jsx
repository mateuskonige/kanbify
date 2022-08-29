import React from "react"

import Board from "./components/Board"
import Header from "./components/Header"

import GlobalStyle from './styles/globals'

function App() {
  return (
    <>
      <Header />
      <Board />
      
      <GlobalStyle />
    </>
  )
}

export default App
