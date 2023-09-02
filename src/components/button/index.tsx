import { BasicButton } from "./styled"

interface IButtonProps{
    children: string | JSX.Element | string[],
    variant?: "text" 
    action?: () => void;
}

const Button = ({children, variant, action}: IButtonProps) => {
    return (
        <>
            <BasicButton onClick={action} variant={variant}>{children}</BasicButton>
        </>
    )
}

export default Button