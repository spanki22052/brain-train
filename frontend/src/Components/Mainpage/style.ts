import styled from "styled-components";

export const MainpageBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;

  select {
    width: 300px;
    margin-left: 25px;
    margin-bottom: 20px;
    height: 30px;
    font-size: 1.1em;
    color: #6a4808;

    background-color: #f0b340;
    border: #6a4808;
  }

  option:hover {
    color: #f0b340;

    background-color: #6a4808;
  }
`;

interface dayPInterface {
  bkg: boolean;
}

export const DaysStateHolder = styled.div`
  width: 450px;
  min-width: 300px;
  margin-left: 25px;

  display: flex;
  justify-content: space-between;

  p {
    padding: 5px;

    color: #563a06;
    font-size: 1.2em;
    font-weight: 500;
  }
`;

export const DaysP = styled.p<dayPInterface>`
  cursor: pointer;

  background: ${(props) => (props.bkg === true ? "#F0B340" : "none")};
  border-radius: 5px;
`;

export const ProductBlock = styled.div`
  width: 300px;
  height: 350px;

  margin-left: 25px;
  margin-top: 10px;

  background: white;

  box-shadow: 0 0 8px rgb(0, 0, 0, 0.08);
  border-radius: 15px;

  padding-bottom: 35px;
  position: relative;

  span {
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
  }

  span:hover {
    .plus {
      stroke: white;
    }
    .circle {
      fill: #f0b340;
    }
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
  }

  h1,
  h2 {
    font-family: Literata, sans-serif;
  }
  h1 {
    font-size: 1.4em;
    padding-top: 20px;
    padding-left: 20px;
    width: 100%;
  }

  h2 {
    font-size: 1.1em;
    width: 100%;
    text-align: justify;
    padding: 0 10px 0 10px;
    font-weight: 400;
  }
`;

export const ProductBlocksHolder = styled.div`
  width: 100%;
  height: autp;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export const TextHolder = styled.div`
    width: 100%:
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;

    padding: 0 10px 0 10px;
`;
