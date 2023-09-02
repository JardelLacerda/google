import { useState } from "react"
import Button from "../button"
import { ContainerConfig } from "./styled"


const Config = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <ContainerConfig>
            <Button variant="text">Configurações de Pesquisa</Button>
            <Button variant="text">Pesquisa avançada</Button>
            <Button variant="text">Seus dados na Pesquisa</Button>
            <Button variant="text">Histórico de pesquisa</Button>
            <Button variant="text">Ajuda da pesquisa</Button>
            <Button variant="text">Enviar Feedbacks</Button>
            <hr/>
            <Button action={() => setDarkTheme(!darkTheme)} variant="text">Tema Escuro: {darkTheme ? "ativado" : "desativado"} </Button>
        </ContainerConfig>
    )
}

export default Config