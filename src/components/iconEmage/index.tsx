import { PIcon } from "./styled"

interface IIconProps{
    children: string;
    width?: string;
    heigth?: string;
}

const Icon = ({children, width, heigth}: IIconProps) => {
    return (
        <PIcon src={children} width={width} heigth={heigth}></PIcon>
    )
}

export default Icon