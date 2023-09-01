import Button from "../button"
import { DivisionFooter, FooterContainer } from "./styled"

const Footer = () => {
    return (
        <FooterContainer>
            <DivisionFooter id="border">
                <p>Brasil</p>
            </DivisionFooter>
            <DivisionFooter>
                <div>
                    <Button variant="text"> Sobre </Button>
                    <Button variant="text"> Publicidade </Button>
                    <Button variant="text"> Negócios </Button>
                    <Button variant="text"> Como funciona a Pesquisa </Button>
                </div>
                <div>
                    <Button variant="text"> Privacidade </Button>
                    <Button variant="text"> Termos </Button>
                    <Button variant="text"> Configurações </Button>
                </div>
            </DivisionFooter>
        </FooterContainer>
    )
}

export default Footer