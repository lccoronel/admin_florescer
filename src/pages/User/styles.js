import styled from 'styled-components';
import { lighten } from 'polished';
import { Modal } from '@material-ui/core';
import Select from 'react-select';

export const Container = styled.div`
  button {
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
  }

  .workspace {
    margin-top: 50px;

    .list {
      padding: 10px;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;

      &:nth-child(odd) {
        background-color: ${lighten(0.29, '#999')};
      }

      .column {
        width: 25%;
        .name {
          font-weight: bold;
        }

        .email {
          font-size: 12px;
        }
      }

      .phone {
        width: 15%;
      }

      .type {
        width: 15%;
      }

      .actions {
        display: flex;
        flex-direction: row;

        .action {
          background: transparent;

          svg {
            color: #000;
          }
        }
      }
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
