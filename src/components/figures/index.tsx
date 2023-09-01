import { Figcaption, FigureCard, Image } from "./styled"

interface IFigureProps{
    children: string,
    figcap?: string,
    heigth?: string,
    width?: string 
}

const Figure = ({children, figcap, heigth, width}: IFigureProps) => {
    return (
        <FigureCard heigth={heigth} width={width}>
            <Image src={children}/>
            {figcap && <Figcaption>{figcap}</Figcaption>}
        </FigureCard>
    )
}

export default Figure