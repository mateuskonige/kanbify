import React, { useState } from 'react'

import { MdAdd, MdClose } from 'react-icons/md'
import Card from '../Card'

import { Container, ModalContainer } from './styles'

export default function List({ data, index: listIndex }) {
  const [createTask, setCreateTask] = useState(false)
  
  const handleModal = () => {
    if(createTask == false) {
      console.log(createTask)
      setCreateTask(true)
    } else {
      console.log(createTask)
      setCreateTask(false)
    }
  }

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type='button' onClick={handleModal}>
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>
     
{createTask && (
  <ModalContainer>
    <section>
      <header>
      <h2>Adicionar tarefa</h2>
      <button onClick={handleModal}><MdClose size={24} color="#fff" /></button>
      </header>
      <main>
        <div>
          <label htmlFor="">Título</label>
          <input type="text" />

          <label htmlFor="">Cor</label>
          <input type="color" />
        </div>
      </main>
    </section>
  </ModalContainer>
)}
     
      <ul>
        {data.cards.map((card, index) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
          />        
        ))}
      </ul>
    </Container>
  )
}
