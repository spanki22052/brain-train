import styled from "styled-components";

export const RemoveProductBlock = styled.div`
    width 350px;
    padding: 25px 15px 25px 15px;
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
    border-radius: 5px;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: column;

    select {
        padding: 5px;
        margin-top: 20px;

        border: 1px solid black;
    }

    button {
        margin-top: 20px;
    }
`;
