import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;

    .container {
        width: 1520px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 37px 21px;
    }
`;
