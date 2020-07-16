import styled from 'styled-components';
import { lighten } from 'polished';
import { Modal } from '@material-ui/core';
import Select from 'react-select';

export const Container = styled.div`
  .row {
    display: flex;
    align-items: center;

    .add {
      display: flex;
      align-items: center;
      border: 0;
      background-color: #5cd15c;
      padding: 7px 10px;
      border-radius: 5px;
      color: #fff;
      font: 700 13px 'Roboto', sans-serif;

      svg {
        margin-right: 5px;
        color: #fff;
      }

      & + .add {
        margin-left: 10px;
        background: #24afff;
      }
    }
  }

  .workspace {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;

    .list {
      border-radius: 5px;
      display: flex;
      flex-direction: column;

      .column {
        background: #ddd;
        padding: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        .name {
          font-weight: bold;
        }

        .email {
          font-size: 12px;
        }
      }

      .subColumn {
        background: #eee;
        padding: 5px;
        height: 80px;

        p {
          font-size: 12px;
          margin: 5px 0;
        }
      }

      .actions {
        display: flex;
        flex-direction: row;

        button {
          background: transparent;
          border: 0;
          color: #fff;
          width: 50%;
          background: #ff4747;
          border-bottom-left-radius: 5px;
          padding: 5px;

          & + button {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 5px;
            background: #ddd;
            color: #000;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .workspace {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 5px;
    }
  }
`;

export const NewRegister = styled(Modal)`
  display: flex;
  justify-content: center;

  .containerModal {
    width: 500px;
    height: 530px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-top: 10%;
    padding: 15px;

    .titleModal {
      font: 600 25px Mukta, sans-serif;
      color: #000;
      margin: 20px 0 15px;
    }

    .line {
      border-bottom: 5px solid #000;
      width: 10%;
    }

    .form {
      display: flex;
      flex-direction: column;
      margin-top: 35px;

      input {
        border: 0;
        background-color: #ddd;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;

        ::-webkit-input-placeholder {
          color: ${lighten(0.4, '#000')};
        }
      }
    }

    .group {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      .back {
        background-color: #000;
        color: #fff;
        font: 500 15px 'Roboto', sans-serif;
        border-radius: 5px;
        width: 100px;
        height: 30px;
        border: 0;
      }

      .send {
        background-color: #5cd15c;
        color: #fff;
        border-radius: 5px;
        width: 100px;
        height: 30px;
        border: 0;
        font: 500 15px 'Roboto', sans-serif;
      }
    }
  }
`;

export const Option = styled(Select)`
  width: 1005;
  margin-top: 10px;
`;

export const Actions = styled(Modal)`
  display: flex;
  justify-content: center;

  .containerModal {
    width: 500px;
    height: 200px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-top: 10%;
    padding: 15px;
  }

  .titleModal {
    font: 600 25px Mukta, sans-serif;
    color: #000;
    margin: 20px 0 15px;
  }

  .line {
    border-bottom: 5px solid #000;
    width: 10%;
  }
  p {
    margin-top: 15px;
  }
  .group {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    .back {
      background-color: #000;
      color: #fff;
      font: 500 15px 'Roboto', sans-serif;
      border-radius: 5px;
      width: 100px;
      height: 30px;
      border: 0;
    }

    .send {
      background-color: red;
      color: #fff;
      border-radius: 5px;
      width: 100px;
      height: 30px;
      border: 0;
      font: 500 15px 'Roboto', sans-serif;
    }
  }
`;
