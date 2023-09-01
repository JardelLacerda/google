import Button from "../button/index"
import Icon from "../iconEmage"
import { CHeader } from "./styled"

import { Menu, Avatar } from "../../assets/index"

const Header = () => {
    return (
        <CHeader>
            <Button variant="text">Gmail</Button>
            <Button variant="text">Imagens</Button>
            <Button variant="text"><Icon>{Menu}</Icon></Button>
            <Button variant="text"><Icon>{Avatar}</Icon></Button>
        </CHeader>
    )
}

export default Header