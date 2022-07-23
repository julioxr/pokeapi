import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #204056;
    color: white;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;

    .menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1920px;
        height: 100px;
        margin: 0 200px;
    }

    input {
        border-radius: 50px;
        width: 483px;
        height: 47px;
        border: none;
        padding: 0 50px;
        font-weight: 700;
        font-size: 16px;
        background-color: #f2f2f2;
        color: red;
    }

    input::placeholder {
        color: #9c9c9c;
    }

    img {
        width: 194px;
        height: 78px;
    }

    @media screen {
    }
`;
