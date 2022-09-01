import React, { useState } from 'react';

import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import { CreateTask } from '../CreateTask';

import { Container } from './styles';

export default function List({ data, index: listIndex }) {
  const [createTask, setCreateTask] = useState(false);

  const handleModal = () => {
    if (createTask == false) {
      setCreateTask(true);
    } else {
      setCreateTask(false);
    }
  };

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button" onClick={handleModal}>
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      {createTask && <CreateTask handleModal={handleModal} />}

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}
