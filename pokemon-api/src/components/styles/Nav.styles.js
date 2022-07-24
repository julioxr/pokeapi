import styled from "styled-components";

export const StyleNav = styled.nav`
    /* max-width: 1520px; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    margin: 37.5px 200px;
    /* background-color: red; */
    /* border: 1px solid black; */

    h3 {
        color: #204056;
        font-size: 16px;
        margin-right: 10px;
        font-weight: 700;
    }

    ul {
        display: flex;
        margin-top: 4px;
    }

    li {
        list-style: none;
        margin: 0 10px;
        font-size: 14px;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.secondary};
        cursor: pointer;
    }

    .red {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 700;
    }

    /* @media (max-width: 780px) {
        flex-direction: column;

        ul {
            flex-direction: column;
        }
    } */
`;
