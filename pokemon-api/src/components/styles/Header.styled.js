import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #204056;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    color: white;

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
        color: #9c9c9c;
    }

    input::placeholder {
        color: #9c9c9c;
    }

    img {
        width: 194px;
        height: 78px;
    }

    @media (max-width: 1520px) {
    }

    @media (max-width: 1140px) {
        .menu {
            justify-content: space-around;
            margin: 0 20px;
            padding: 0;
        }
    }

    @media (max-width: 780px) {
        justify-content: space-between;
        width: 100%;
        padding: 0;

        img {
            width: 140px;
            margin-left: 15px;
            height: auto;
        }

        .menu {
            width: 100%;
            margin: 0;
            justify-content: space-around;
        }

        input {
            box-sizing: content-box;
            width: 150px;
            font-size: 13px;
            height: 30px;
            padding: 0 15px;
        }
        form {
            box-sizing: content-box;
            display: flex;
            justify-content: center;
        }
    }
`;
