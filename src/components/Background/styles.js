import styled, { css } from 'styled-components';

const windowWidth = window.innerWidth;

export const Container = styled.div`
  .high {
    width: 100vw;
    height: 100%;
    background: #fff;
    position: fixed;
  }
`;

export const Scroll = styled.div`
  display: flex;
  justify-content: flex-end;

  .main {
    ${windowWidth > 1200
      ? css`
          width: 95.5%;
          top: 5px;
          padding: 0 1%;
        `
      : css`
          width: 100%;
          padding: 0 2%;
        `}
    position: absolute;
    height: 100vh;

    .titlePage {
      color: #000;
      font-size: 40px;
      margin-bottom: 20px;
      margin-top: 30px;
    }

    .content {
      background-color: #fff;
      border-radius: 5px;
      width: 100%;
    }
  }
`;
