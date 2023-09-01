import { styled } from "styled-components";

interface IProps {
    variant?: "text";
    onClick?: () => void;
}

export const BasicButton = styled.button<IProps>`
    color: "#707070";
    border: none;
    margin: 0;
    cursor: pointer;
    ${({variant}) => variant === "text" ? 
    `
        background-color: transparent;
    ` : 
    `
        padding: 8px;
        background-color: #F8F8F8;
        border-radius: 10px
    `}
`