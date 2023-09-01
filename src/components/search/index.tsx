import Button from "../button"
import Icon from "../iconEmage"
import { SearchContainer, SearchInput } from "./styled"

import { Lupa, Teclado, Microfone } from "../../assets"

const Search = () => {
    return (
        <SearchContainer>
            <Button variant="text"><Icon width="28px" heigth="28px">{Lupa}</Icon></Button>
            <SearchInput/>
            <Button variant="text"><Icon width="28px" heigth="28px">{Teclado}</Icon></Button>
            <Button variant="text"><Icon width="28px" heigth="28px">{Microfone}</Icon></Button>
        </SearchContainer>
    )
}
export default Search