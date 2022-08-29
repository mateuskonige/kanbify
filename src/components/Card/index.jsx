import React from 'react'
import { Container, Label } from '../Card/styles'

import { useDrag } from 'react-dnd'

export default function Card({ data }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })
  
  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  )
}
