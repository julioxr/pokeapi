import styled from "styled-components";

export const StyledCard = styled.article`
    width: 363px;
    height: 181px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    background-color: #fff;
    position: relative;
    /* margin: 0 200px; */

    .pokemon {
        width: 167px;
        /* background-color: #b5b5b5; */
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 120px;
            filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.15));
        }
    }

    .text {
        height: 100%;
        /* background-color: #a1a1a1; */
        padding: 12px 0;
        width: 196px;
        /* border: 1px solid green; */
    }

    .description {
        margin-bottom: 5px;
        color: ${({ theme }) => theme.colors.text};
        font-weight: 300;
        font-size: 12px;
    }

    .data-pokemon {
        display: flex;
        justify-content: flex-start;
    }

    .ability,
    .type {
        font-size: 10px;
        color: ${({ theme }) => theme.colors.text};
        font-weight: 700;
        margin-right: 10px;
    }

    h2 {
        font-size: 32px;
        color: ${({ theme }) => theme.colors.primary};
    }

    h3 {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.primary};
    }

    section {
        display: flex;
        flex-direction: column;
        margin: 2px 0;
        /* border: 1px solid red; */
    }
    .caracteristics {
        display: flex;
        flex-direction: column;
        /* border: 1px solid black; */
    }

    span {
        position: absolute;
        bottom: 5px;
        right: 15px;
        font-size: 30px;
        color: ${({ theme }) => theme.colors.primary};
    }
`;
