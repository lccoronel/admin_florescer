import styled from 'styled-components';

export const Container = styled.div`
  .welcome {
    background: #000;
    color: #fff;
    padding: 20px;
    border-radius: 10px;
  }

  .containerInfo {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    .box {
      width: 100%;
      display: flex;
      flex-direction: column;

      .header {
        background: #000;
        color: #fff;
        padding: 10px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          font-weight: bold;
        }
      }

      .body {
        width: 100%;
        background: #ddd;
        padding: 10px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        p {
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }
`;
