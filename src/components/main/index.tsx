import Figure from "../figures"
import { Container, ContainerButtons, Link } from "./styled"

import { GoogleLogo, SegurityIcon } from "../../assets/index"
import Search from "../search"
import Button from "../button"

const MainContainer = () => {
    return (
        <Container>
            <Figure width="350px" heigth="150px">{GoogleLogo}</Figure>
            <Search/>
            <ContainerButtons>
                <Button>Pesquisa Google</Button>
                <Button>Estou com Sorte</Button>
            </ContainerButtons>
            <ContainerButtons>
                <Button variant="text"><Figure width="47px" heigth="50px">{SegurityIcon}</Figure></Button>
                <Link>Faça o Check-up de privacidade</Link>
            </ContainerButtons>

        </Container>
    )
}

export default MainContainer