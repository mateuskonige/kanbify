import React from "react"

import Board from "./components/Board"
import Header from "./components/Header"

import GlobalStyle from './styles/globals'

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      
      <GlobalStyle />
    </DndProvider>
  )
}

export default App
