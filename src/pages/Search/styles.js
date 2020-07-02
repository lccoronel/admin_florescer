import styled from 'styled-components';
import { lighten } from 'polished';
import { Modal } from '@material-ui/core';
import Select from 'react-select';

export const Container = styled.div`
  .group {
    margin-top: 20px;
    display: flex;
    margin-bottom: 50px;
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
    }
    .addAnwser {
      margin-left: 10px;
      display: flex;
      align-items: center;
      border: 0;
      background-color: #24afff;
      padding: 7px 10px;
      border-radius: 5px;
      color: #fff;
      font: 700 13px 'Roboto', sans-serif;
      svg {
        margin-right: 5px;
        color: #fff;
      }
    }
  }
  .workspace {
    margin-top: 50px;
    .list {
      margin-top: 15px;
      .dimension {
        background: #ddd;
        padding: 10px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        .name {
          font-size: 20px;
          margin-right: 20px;
          margin-bottom: 5px;
          color: #000;
          font-weight: bold;
        }
        .edit {
          background: #fdf149;
          border: 0;
          padding: 2px 5px;
          border-radius: 5px;
          font-size: 12px;
        }
        .action {
          border: 0;
          background: #999;
          padding: 2px 5px;
          border-radius: 5px;
          background: #fd625e;
          color: #fff;
          font-size: 12px;
          margin-left: 5px;
        }
        .status {
          margin-left: 5px;
          border: 0;
          padding: 2px 5px;
          border-radius: 5px;
          color: #fff;
          font-size: 12px;
        }
      }
      .anwsers {
        background: #ccc;
        padding: 10px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        .anwser {
          display: flex;
          align-items: center;
          & + .anwser {
            margin-top: 15px;
          }
          .name {
            font-size: 15px;
            margin-right: 40px;
            margin-left: 10px;
          }
          .edit {
            width: 20px;
            height: 8px;
            border-radius: 5px;
            border: 0;
            background: #fdf149;
          }
          .action {
            width: 20px;
            height: 8px;
            border-radius: 5px;
            margin-left: 15px;
            border: 0;
            background: transparent;
            background: #fd625e;
            svg {
              color: #999;
            }
          }
          .status {
            margin-left: 5px;
            border: 0;
            padding: 2px 5px;
            border-radius: 5px;
            color: #000;
            font-size: 12px;
            background: #ddd;
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
    height: 280px;
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
  input {
    border: 0;
    background-color: #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    margin-top: 10px;
    ::-webkit-input-placeholder {
      color: ${lighten(0.4, '#000')};
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
`;

export const Option = styled(Select)`
  width: 1005;
  margin-top: 10px;
`;
