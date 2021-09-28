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

export const SendCartButton = styled.button`
  width: 120px;
  height: 35px;

  background: #f0b340;
  border-radius: 4px;

  font-family: Cormorant;
  font-weight: 600;
  font-size: 18px;

  color: #563a06;

  border: none;

  position: absolute;
  bottom: 25px;
  left: 25px;

  &:hover {
    background-color: #e7a831;
    color: #78520a;
  }
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
  flex-wrap: wrap;

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

  @media screen and (max-width: 400px) {

    height: auto;

    img {
      width: 80%;
      height: 120px;
      margin: auto;
    }
    .text-holder {
      margin: 5px !important;
    }
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
    margin-right: 40px

    height: 35px;
    width: 125px;

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

export const CartStateH1 = styled.h1`
  font-size: 1.4em;
  font-family: "Helvetica", sans-serif;
`;
