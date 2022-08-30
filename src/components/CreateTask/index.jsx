import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Container } from './styles';
import { loadLists } from '../../services/api'
const data = loadLists();

export function CreateTask({ handleModal }) {
  const [title, setTitle] = useState('')
  const [color, setColor] = useState('')


  const addTaskToList = () => {
    if(title === '' && color === '') {
      return;
    }

    data[0].cards.push({
      id: data[0].cards.length + 1,
      content: title,
      labels: [color],
    })

    document.getElementById('closeButton').click()
  }
  
  return (
    <Container>
    <section>
      <header className='modal-header'>
      <h2>Adicionar tarefa</h2>
      <button id='closeButton' onClick={handleModal}><MdClose size={24} color="#fff" /></button>
      </header>
      <main>
        <div>
          <label htmlFor="">Título</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          {title}
        </div>
        <div>
          <label htmlFor="">Cor</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
          {color}
        </div>
      </main>
      <footer>
        <button onClick={addTaskToList}>Salvar</button>
      </footer>
    </section>
  </Container>
  );
}
