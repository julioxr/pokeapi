import styled from "styled-components";

export const StyleNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 35px;
    margin: 37.5px 200px;
    border: 1px solid black;

    h3 {
        color: #204056;
        font-size: 16px;
        margin-right: 10px;
        font-weight: 700;
    }

    ul {
        display: flex;
        /* margin-top: 4px; */
    }

    li {
        list-style: none;
        margin: 0 10px;
        font-size: 14px;
        font-weight: 300;
        color: #204056;
        cursor: pointer;
    }

    .red {
        color: #f65a5b;
        font-weight: 700;
    }
`;
