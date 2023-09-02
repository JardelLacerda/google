import { useState } from "react"
import Button from "../button"
import { DivisionFooter, FooterContainer } from "./styled"
import Config from "../config"

const Footer = () => {
    const [openConfig, setOpenConfig] = useState(false)

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
                {openConfig && <Config/>}
                <div>
                    <Button variant="text"> Privacidade </Button>
                    <Button variant="text"> Termos </Button>
                    <Button action={() => setOpenConfig(!openConfig)} variant="text"> Configurações </Button>
                </div>
            </DivisionFooter>
        </FooterContainer>
    )
}

export default Footer