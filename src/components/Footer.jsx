import styled from "styled-components";
import footerLogo from "../svgs/footer_logo.svg";
import rightArrow from "../svgs/right_arrow.svg";
import instagram from "../svgs/instagram.svg";
import linkedin from "../svgs/linkedin.svg";
import whatsapp from "../svgs/whatsapp.svg";
import {mobile,smallLaptop} from "../responsive";
import Modal from "../components/Modal";
import {useState} from "react";

const Container = styled.footer`
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
`
const Wrapper = styled.div`
    border-top:1px solid #c4c4c4;
    width:90%;
    padding:20px;
    ${smallLaptop({padding:"10px"})};
    ${mobile({
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center"
    })};
`
const ImageContainer = styled.div`
    margin-bottom:10px;
`
const Logo = styled.img`

`
const FooterContents = styled.div`
    display:flex;
    align-items: center;
    ${mobile({
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center"
    })};
`
const PlanContainer = styled.div`
    flex:2.2;
    padding: 3rem;
    background: linear-gradient(90deg, rgba(86, 104, 209, 0.85) 0%, rgba(30, 165, 252, 0.84) 100%);
    border-radius: 10px;
    
`
const PlanTitle = styled.h2`
    font-size:1.8rem;
    max-width:33rem;
    color:white;
`
const PlanDesc = styled.p`
    font-size:1.2rem;
    color:white;
    max-width:35rem;
    padding:1rem 0 0 0;
`
const PlanImageContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content:flex-end;
`
const PlanArrowImage = styled.img`

`
const OthersTitle = styled.h2`
   color:#5668D1;
   font-size:1.75rem;
   ${smallLaptop({fontSize:"1.1rem"})};
   ${mobile({marginTop:"40px",fontSize:"1.4rem"})};
`
const OtherCards = styled.div`
    flex:1;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({justifyContent:"center",marginLeft:"0"})};
    flex-direction: column;
    margin-left:30px;
`
const ProductCard = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction: column;
`
const ProductCardItem = styled.li`
    list-style-type: none;
    color:#696969;
    padding:1rem;
    font-size:1.5rem;
    ${smallLaptop({fontSize:"0.9rem"})};
    ${mobile({fontSize:"1rem"})};
`
const ContactCard = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction: column;
`
const ContactCardItem = styled.li`
    list-style-type: none;
    color:#696969;
    padding:1rem;
    font-size:1.5rem;
`
const ContactImages = styled.img`
    ${smallLaptop({width:"20px"})};
    ${mobile({width:"25px"})};
`

const QuestionButton = styled.button`
    background-color:#1EA5FC;
    color:white;
    padding:15px;
    display:flex;
    align-items: center;
    justify-content:center;
    border:none;
    border-radius:10px;
    margin-top:100px;
    ${mobile({marginTop:"30px"})};
    width:150px;
    cursor:pointer;
`

const ReserveContainer = styled.p`
    color:#696969;
    padding:2rem 0 0 0;
    text-align:center;
    ${mobile({fontSize:"0.7rem"})};
`

const Footer = () => {

    const [isClicked,setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(current=>!current);
    }

    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Logo src={footerLogo}/>
                </ImageContainer>
                <FooterContents>
                    <PlanContainer>
                        <PlanTitle>Switch to Premium Plan today and 
                        save up to 30% off</PlanTitle>
                        <PlanDesc>Check which versions are available to upgrade to and
                         validate whether your current subcription is upgradeable</PlanDesc>
                         <PlanImageContainer>
                             <PlanArrowImage src={rightArrow}/>
                         </PlanImageContainer>
                    </PlanContainer>
                    <OtherCards>
                        <OthersTitle>Any question ?</OthersTitle>
                        <QuestionButton onClick={handleClick}>Create Ticket</QuestionButton>
                        <Modal onClick={handleClick} show={isClicked}></Modal>
                    </OtherCards>
                    <OtherCards>
                        <OthersTitle>Product</OthersTitle>
                        <ProductCard>
                            <ProductCardItem>How it works</ProductCardItem>
                            <ProductCardItem>Pricing</ProductCardItem>
                            <ProductCardItem>Get an Offer</ProductCardItem>
                        </ProductCard>
                    </OtherCards>
                    <OtherCards>
                        <OthersTitle>Contact us</OthersTitle>
                        <ContactCard>
                            <ContactCardItem>
                                <ContactImages src={instagram}/>
                            </ContactCardItem>
                            <ContactCardItem>
                                <ContactImages src={linkedin}/>
                            </ContactCardItem>
                            <ContactCardItem>
                                <ContactImages src={whatsapp}/>
                            </ContactCardItem>
                        </ContactCard>
                    </OtherCards>
                </FooterContents>
                <ReserveContainer>© Copyright 2020 by yorusoft. All rights reserved</ReserveContainer>
            </Wrapper>
        </Container>
    )
}

export default Footer
