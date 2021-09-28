import styled from "styled-components";

export const AdminPageBlock = styled.div`
  width: 100%;
  height: 100%;
`;

export const AddProductBlock = styled.div`
  width: 400px;
  height: 600px;
  background-color: rgb(0, 0, 0, 0.01);
  box-shadow: 0 0 12px rgb(0, 0, 0, 0.1);

  border-radius: 10px;

  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  input {
    width: 80%;
    height: 35px;
  }

  select {
    width: 80%;
    height: 30px;
  }

  button {
    width: 50%;
    height: 40px;
  }

  .checkboxes-holder {
    width: 90%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .checkbox-block {
    width: 50%;
    height: 20px;

    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .checkbox-block input {
    width: 20px;
    height: 20px;
  }

  .checkbox-block p {
    margin-left: 5px;
  }
`;
