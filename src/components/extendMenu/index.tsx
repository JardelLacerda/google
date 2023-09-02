import Icon from "../iconEmage"
import { ContainerMenu } from "./styled"

const dataIcons = [
    {
        id: 1,
        icon: "https://cdn-icons-png.flaticon.com/512/711/711769.png",
        title: "Perfil"
    },
    {
        id: 2,
        icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        title: "Youtube"
    },
    {
        id: 3,
        icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
        title: "Pesquisa"
    },
    {
        id: 4,
        icon: "https://seeklogo.com/images/N/new-google-maps-icon-logo-263A01C734-seeklogo.com.png",
        title: "Maps"
    },
    {
        id: 5,
        icon: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
        title: "Gmail"
    },
    {
        id: 1,
        icon: "https://cdn-icons-png.flaticon.com/512/711/711769.png",
        title: "Perfil"
    },
    {
        id: 2,
        icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        title: "Youtube"
    },
    {
        id: 3,
        icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
        title: "Pesquisa"
    },
    {
        id: 4,
        icon: "https://seeklogo.com/images/N/new-google-maps-icon-logo-263A01C734-seeklogo.com.png",
        title: "Maps"
    },
    {
        id: 5,
        icon: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
        title: "Gmail"
    },

]

const ExtendMenu = () => {
    return(
        <ContainerMenu>
            {dataIcons.map(({id, icon, title}) => (
                <div key={id}>
                    <Icon>{icon}</Icon>
                    <p>{title}</p>
                </div>
            ))}
        </ContainerMenu>
    )
}

export default ExtendMenu