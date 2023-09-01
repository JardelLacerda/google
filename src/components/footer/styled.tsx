import { styled } from "styled-components";


export const FooterContainer = styled.footer`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;

    #border{
        border-bottom: solid 1px #DADCE0;
        margin: 0 0 0 7px;
    }
`

export const DivisionFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 45px;

    div{
        display: flex;
        flex-direction: row;
    }
`

