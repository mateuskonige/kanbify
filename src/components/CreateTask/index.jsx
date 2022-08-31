import { useContext, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Container } from './styles';
import BoardContext from '../Board/context';

export function CreateTask({ handleModal }) {
  const [title, setTitle] = useState('')
  const [color, setColor] = useState('')
  const { addTask } = useContext(BoardContext);

  const save = () => {
    if(title === '' && color === '') {
      return;
    }

    addTask(title, color);

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
        </div>
        <div>
          <label htmlFor="">Cor</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
        </div>
      </main>
      <footer>
        <button onClick={save}>Salvar</button>
      </footer>
    </section>
  </Container>
  );
}
