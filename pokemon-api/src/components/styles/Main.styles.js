import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;

    .container {
        width: 100vw;
        margin: 0 200px;
        /* background-color: red; */
        /* display: flex; */
        /* flex-wrap: wrap; */
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        /* grid-template-columns: repeat(auto-fit, minmax(363px, 10px)); */
        justify-content: center;
        align-items: center;
        gap: 37px 21px;
    }

    @media (max-width: 1520px) {
        .container {
            grid-template-columns: repeat(3, 370px);
        }
    }
    @media (max-width: 1140px) {
        .container {
            grid-template-columns: repeat(2, 370px);
        }
    }
    @media (max-width: 780px) {
        .container {
            grid-template-columns: repeat(1, 370px);
        }
    }
`;
