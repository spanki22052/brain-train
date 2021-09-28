import styled from "styled-components";

export const RequestsBlock = styled.div`
  width: 90%;
  height: auto;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const RequestsStatusH1 = styled.h1`
  font-size: 1.5em;
  font-family: "Helvetica", sans-serif;
`;

export const RequestBlock = styled.div`
  width: 250px;
  height: 115px;
  padding: 10px;

  border-radius: 5px;

  border: 1px solid #78520a;
  box-sizing: border-box;
  border-radius: 5px;

  * {
    font-family: Montserrat;
    font-style: normal;
    line-height: 18px;

    color: #563a06;
  }

  h1 {
    font-size: 1.4em;
    font-weight: 500;
  }

  h2 {
    font-size: 1.2em;
    font-weight: 500;
  }

  .elements-holder {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    button {
      font-size: 0.8em;
      background: none;

      width: 90px;
      height: 25px;
      font-weight: 500;

      border: 0.8px solid #6a4808;
      box-sizing: border-box;
      border-radius: 5px;

      &:hover {
        background-color: #6a4808;
        color: white;
      }
    }
  }
`;
