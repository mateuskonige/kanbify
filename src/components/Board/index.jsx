import React, { useState } from 'react'

import BoardContext from './context'
import List from '../List'

import { loadLists } from '../../services/api'

import { Container } from './styles'
import produce from 'immer'

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];
      
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  }

  function addTask(title, color) {
    setLists(produce(lists, draft => {
      draft[0].cards.push({
        id: draft[0].cards.length + 1,
        content: title,
        labels: [color],
      });
    }))
  }
  
  return (
    <BoardContext.Provider value={{ lists, move, addTask }}>
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>
  )
}
