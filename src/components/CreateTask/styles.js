import styled from 'styled-components';

export const Container = styled.div`
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
    border: 1px solid 1px solid rgba(0,0,0,0.05);
    border-radius: 4px;
  }

  header {
    height: 72px;
    padding: 0 15px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }

  main {
    padding: 16px;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      margin-top: 15px;

      input {
        font-size: 16px;
        padding: 8px 4px;
        border: 1px solid  #3b5bfd;
      }
    }
  }

  footer {
    padding: 15px;
    
    button {
      width: 100%;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
      color: #fff;
    }
  }
`;
