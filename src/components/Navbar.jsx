
import navbarLogo from "../svgs/navbar_logo.svg";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.nav`
    position:absolute;
    width:100%;
    height: 4rem;
    z-index:2;
    ${mobile({position:"relative"})}
`
const Wrapper = styled.div`
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({padding:"1rem 1rem"})};
`
const Left = styled.div`

`
const LogoContainer = styled.div`

`
const Logo = styled.img`
    ${mobile({width:"9rem"})};
`

const Right = styled.div`
    padding:0 12rem;
    ${mobile({padding:"0 1rem"})};
`
const Links = styled.ul`
    
`
const LinkItemContainer = styled.a`
    text-decoration: none;
`
const LinkItem = styled.li`
    list-style: none;
    font-weight:bold;
    color:#5668D1;
    ${mobile({fontSize:"0.8rem"})};
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LogoContainer>
                        <Logo src={navbarLogo}/>
                    </LogoContainer>
                </Left>
                <Right>
                    <Links>
                        <LinkItemContainer href="">
                            <LinkItem>Get an Offer</LinkItem>
                        </LinkItemContainer>
                    </Links>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
