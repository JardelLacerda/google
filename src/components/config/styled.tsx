import { styled } from "styled-components";

export const ContainerConfig = styled.article`
    width: 180px;
    min-height: 250px;
    background-color: white;
    border: solid 2px #F2F2F2;
    position: absolute; 
    right: 25px;
    bottom: 30px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    font-size: 1rem;
    line-height: 2;
    

    button{
        width: 100%;
        text-align: left;
        padding: 5px 0;
    }

    button:hover{
        background-color: #F2F2F2;
    }
`