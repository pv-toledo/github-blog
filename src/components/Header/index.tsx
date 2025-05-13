import { HeaderContainer } from "./styles";
import cover from '../../assets/cover.png'
import logo from '../../assets/logo.svg'

export function Header () {
    return (
        <HeaderContainer>
            <img src={cover} id="coverImg"/>

            <div>
                <img src={logo} />
                <span>GITHUB BLOG</span>
            </div>
           
        </HeaderContainer>
    )
}