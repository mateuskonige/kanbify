import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  background: rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: 320px;
    background: #fff;    
  }

  header {
    background: #eee;
    height: 42px;
    border-bottom: 1px solid rgba(0,0,0,0.05);

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;