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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;

    .list {
      .containerItem {
        background: #eee;
        padding: 10px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 100%;

        .name {
          font-weight: bold;
        }

        .city {
          font-size: 13px;
          margin-top: 5px;
        }

        .community {
          margin-top: 5px;
          border-radius: 5px;
        }
      }

      .row {
        display: flex;
        flex-direction: row;

        .delete {
          background: #ff4747;
          width: 50%;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 500;
        }

        .edit {
          background: #ddd;
          width: 50%;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          font-weight: 500;
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
    height: 400px;
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
  margin-bottom: 10px;
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
