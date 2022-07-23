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

    img {
        width: 363.89px;
    }

    p {
        font-size: 10px;
    }

    h2 {
        font-size: 32px;
        color: ${({ theme }) => theme.colors.primary};
    }

    h3 {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.primary};
    }

    .description {
        font-size: 12px;
    }

    section {
        display: flex;
        flex-direction: column;
    }

    .data-pokemon {
        display: flex;
    }
`;
