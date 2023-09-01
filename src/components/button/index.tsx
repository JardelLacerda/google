import { BasicButton } from "./styled"

interface IButtonProps{
    children: string | JSX.Element,
    variant?: "text" 
}

const Button = ({children, variant}: IButtonProps) => {
    return (
        <>
            <BasicButton variant={variant}>{children}</BasicButton>
        </>
    )
}

export default Button