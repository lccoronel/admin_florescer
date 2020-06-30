import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 180px;
    height: 100px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;

    p {
      font: 400 20px 'Roboto', sans-serif;
      color: #000;
      margin: 0 10px 20px;
    }

    input {
      width: 300px;
      height: 45px;
      border-radius: 5px;
      border: 0;
      background-color: rgb(200, 200, 200, 0.3);
      padding: 10px;
      font: 100 17px 'Roboto', sans-serif;
      color: #000;

      &::-webkit-input-placeholder {
        color: #000;
      }

      & + input {
        margin-top: 5px;
      }
    }

    button {
      border: 0;
      background-color: #000;
      color: #fff;
      font: 400 17px 'Roboto', sans-serif;
      padding: 10px 15px;
      border-radius: 5px;
      margin-top: 20px;
      display: flex;
      align-items: center;
      transition: background-color 0.2s;

      svg {
        margin-left: 10px;
      }

      &:hover {
        background-color: ${lighten(0.2, '#000')};
      }
    }
  }

  .line {
    border-bottom: 1px solid #ddd;
    width: 300px;
    height: 1px;
    display: flex;
    align-self: center;
    margin-top: 50px;
  }

  a {
    display: flex;
    align-self: center;
    margin-top: 10px;
    font: 300 17px 'Roboto', sans-serif;
    color: #008bf5;
  }
`;
