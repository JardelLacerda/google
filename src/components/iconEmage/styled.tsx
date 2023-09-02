import { styled } from "styled-components";

interface IProps {
    width?: string;
    heigth?: string;
}

export const PIcon = styled.img<IProps>`
    height: ${({height}) => height ? height : "40px"};
    width: ${({width}) => width ? width : "40px"};
    border-radius: 100%;
`
