import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 65px;
  position: fixed;

  .open {
    .close {
      #check {
        display: none;

        &:checked ~ .bar {
          transform: translateX(300px);

          -webkit-box-shadow: 0px 3px 22px -6px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 3px 22px -6px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 3px 22px -6px rgba(0, 0, 0, 0.75);
        }
      }

      #icone {
        cursor: pointer;
        padding: 22px;
        position: absolute;
        z-index: 1;
        margin-bottom: 50px;

        svg {
          color: #000;
        }
      }

      .bar {
        background-color: #fff;
        height: 100%;
        width: 250px;
        position: absolute;
        transition: all 0.2s linear;
        left: -300px;

        nav {
          width: 100%;
          position: absolute;
          top: 70px;
          display: flex;
          flex-direction: column;

          img {
            width: 75%;
            height: 60px;
            margin-bottom: 30px;
            margin-left: 30px;
          }

          .user {
            width: 70px;
            height: 70px;
            background-color: #000;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 90px;

            .wordUser {
              color: #fff;
              font-size: 30px;
            }
          }

          .nameUser {
            margin-left: 55px;
            margin-top: 15px;
            font: 600 20px Mukta, sans-serif;
          }

          a {
            text-decoration: none;
          }
        }

        .optionBar {
          display: flex;
          flex-direction: column;
          margin-top: 30px;

          .routesBar {
            display: flex;
            align-items: center;
            border: 0;
            height: 50px;
            background-color: transparent;
            transition: all 0.2s;

            &:hover {
              background-color: ${lighten(0.08, '#ddd')};
              border-top-right-radius: 50px;
              border-bottom-right-radius: 50px;
              margin-right: 15px;
            }

            svg {
              color: #999;
              margin-left: 20px;
            }

            p {
              margin-left: 15px;
              color: #010101;
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  .routes {
    margin-top: 70px;
    padding: 12px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .user {
      width: 40px;
      height: 40px;
      background-color: #000;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      .wordUser {
        color: #fff;
        font-size: 20px;
      }
    }

    .option {
      margin-top: 25px;
      padding: 10px;

      .route {
        svg {
          color: #999;

          &:hover {
            color: #000;
          }
        }

        & + .route {
          margin-top: 30px;
        }
      }
    }
  }
`;
