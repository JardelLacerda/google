import { styled } from "styled-components";

interface IPropsCard{
    heigth?: string,
    width?: string
}

export const FigureCard = styled.figure<IPropsCard>`
    height: ${({heigth}) => heigth ? heigth : "200px"};
    width: ${({width}) => width ? width : "200px"};
    margin: 0;
`

export const Figcaption = styled.figcaption`
    width: 100%;
    text-align: center;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`