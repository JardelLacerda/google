import { styled } from "styled-components";


export const ContainerMenu = styled.section`
    border: solid 10px #F0F0F0;
    border-bottom: 5px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    width: 300px;
    max-height: 350px;
    padding: 20px 10px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 100px;
    position: absolute;
    right: 40px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        background: #F2F2F2;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #bebbbb;
        border-radius: 20px;       
    }

    div{
        margin: 0 11px;
        cursor: pointer;
    }

    div p{
        font-weight: 500;
        margin: 0;
    }
`


