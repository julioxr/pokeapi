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
        gap: 15px;
        align-items: center;
    }

    li {
        list-style: none;
        text-align: center;
        /* background-color: red; */
        /* margin: 0 10px; */
        transition: all 0.2s ease-in-out;
        font-size: 14px;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.secondary};
        cursor: pointer;

        :hover {
            color: ${({ theme }) => `${theme.colors.primary}`};
            font-weight: 700;
            padding: 4px 8px;
            background-color: #d4d4d4;
            border-radius: 5px;
        }
    }

    .red {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 700;
    }

    a {
        text-decoration: none;
    }

    select {
        display: none;
    }
    .paginator {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin: 0 20px;

        p {
            padding: 0 10px;
        }
    }

    @media (max-width: 1520px) {
        select {
            display: block;
        }
        ul {
            display: none;
        }
    }

    @media (max-width: 1140px) {
    }

    @media (max-width: 780px) {
    }
`;
