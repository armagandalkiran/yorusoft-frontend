import styled from "styled-components";
import Cards from "../components/Cards";
import {mobile,smallLaptop} from "../responsive";

const Container = styled.div`
    background:linear-gradient(-190deg,#1EA5FC,#C5B0FF 60%,transparent 0);
`
const Title = styled.h2`
    color:white;
    font-size:3rem;
    text-align:center;
    padding:4rem;
    ${smallLaptop({fontSize:"2.5rem"})};
    ${mobile({fontSize:"1.3rem"})};
`
const PricingBottom = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
    padding:0 0 40px 0;
`
const OrContainer = styled.span`
    width:30%;
    height:auto;
    display:block;
    position:relative;
    text-align:center;
    margin-bottom:20px;
    ${mobile({width:"60%"})};
    
    &:before{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        content:"";
        display:block;
        width:100%;
        height:1px;
        background-color:#C4C4C4;
    }
    
`
const Or = styled.span`
    padding:0 36px;
    color:#C4C4C4;
    background-color:white;
    position:relative;
`

const Button = styled.button`
    width:15%;
    padding:20px 0;
    font-size:1.2rem;
    background-color:#FFE598;
    color:#696969;
    border:none;
    border-radius:10px;
    font-weight:bold;
    margin-top:60px;
    cursor:pointer;
    ${smallLaptop({width:"30%",fontSize:"1rem"})};
    ${mobile({width:"50%",fontSize:"0.8rem"})};
`

const Pricing = () => {
    return (
        <Container>
            <Title>Pricing built for businesses of all sizes.</Title>
            <Cards/>
            <PricingBottom>
                <OrContainer>
                    <Or>OR</Or>
                </OrContainer>
                <Button>Get a special offer</Button>
            </PricingBottom>
        </Container>
    )
}

export default Pricing;
