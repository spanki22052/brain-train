import styled from "styled-components";

export const CartComponent = styled.div`
  width: 100%;
  padding: 20px;
`;

export const CartHolder = styled.div`
  width: 80%;
  margin-top: 25px;
  height: auto;
  border-radius: 12px;

  background-color: white;
  box-shadow: 0 0 8px rgb(0, 0, 0, 0.03);
  padding: 20px 20px 100px 20px;

  position: relative;
`;

export const CartBlock = styled.div`
  width: 80%;
  background-color: white;

  box-shadow: 0 0 8px rgb(0, 0, 0, 0.03);
  padding: 25px;

  border-radius: 12px;

  h1 {
    font-size: 1.3em;
    font-weight: 500;
  }

  .checkbox-text {
    display: flex;
    width: 100%;

    margin-top: 30px;

    input {
      margin-top: 4px;
      width: 15px;
      height: 15px;
    }

    p {
      margin-left: 10px;
      font-size: 1em;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const CartProductBlock = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: nowrap;

  position: relative;

  padding: 5px 5px 5px 5px;
  border-radius: 20px;

  justify-content: flex-start;
  align-items: center;

  img {
    width: 150px;
    height: 80px;
    object-fit: cover;
  }

  .text-holder {
    margin-left: 20px;

    h1 {
      font-size: 1.1em;
    }

    .price {
      font-size: 1.4em;
      font-weight: 600;
    }
  }

  .buttons-holder {
    position: absolute;
    bottom: 10px;
    right: 10px;

    width: 100px;
    height: 35px;

    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;

    p {
      font-size: 1.1em;
      font-weight: 600;
      margin-top: 1px;
    }

    button {
      height: 30px;
      width: 30px;
      border-radius: 100px;
      border: 0;

      font-weight: 700;
      font-size: 1.1em;
    }
  }
`;

export const CurrentSumH1 = styled.h1`
  position: absolute;

  right: 20px;
  bottom: 20px;

  color: black;

  font-size: 1.4em;
  font-weight: 600;
`;

export const TrashButton = styled.button`
  width: 30px;
  height: 30px;

  border: 0;
`;
