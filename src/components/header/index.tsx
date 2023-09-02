import Button from "../button/index"
import Icon from "../iconEmage"
import { CHeader } from "./styled"

import { Menu, Avatar } from "../../assets/index"
import { useState } from "react"
import ExtendMenu from "../extendMenu"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <CHeader>
            <Button variant="text">Gmail</Button>
            <Button variant="text">Imagens</Button>    
            <div>
                <Button action={() => setOpenMenu(!openMenu)} variant="text"><Icon>{Menu}</Icon></Button>
                {openMenu && <ExtendMenu/>}
            </div>
            <Button variant="text"><Icon>{Avatar}</Icon></Button>
        </CHeader>
    )
}

export default Header