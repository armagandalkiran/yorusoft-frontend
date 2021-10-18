import styled from "styled-components";
import Ribbon from "../svgs/ribbon.svg";
import {mobile} from "../responsive";

const Container = styled.div`
    position:relative;
    padding:46px 40px;
    margin-top:${props=>props.type !== "Standard" && "50px"};
    ${mobile({marginTop:"0",padding:"38px 34px"})};
`
const RibbonImage = styled.img`
    position:absolute;
    top:0;
    right:0;
    display:${props=>props.type !== "Standard" && "none"};
    ${mobile({width:"8rem"})};
`
const CardContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex-direction: column;
    padding: 30px;
    min-height:${props=>props.type === "Standard" ? "650px" : "520px"};
    width:${props=>props.type === "Standard" ? "500px" : "440px"};
    ${mobile({minHeight:"400px",width:"280px"})};
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius:5px;
    background-color:white;
`
const Title = styled.h2`
    background:${props=>props.color};
    color:white;
    text-align:center;
    border-radius:5px;
    padding:5px;
    width:100%;
    font-size:${props=>props.type === "Standard" && "2rem"};
    ${mobile({fontSize:"1.2rem"})};
`
const PriceCurrency = styled.span`
    font-size:${props=>props.type !== "Standard" ? "1.2rem" : "1.6rem"};
    ${mobile({fontSize:"1rem"})};
`
const Price = styled.p`
    color:#03004E;
    margin-top:16px;
    font-weight:bold;
    font-size:${props=>props.type !== "Standard" ? "2rem" : "2.5rem"};
    text-align:center;
    ${mobile({fontSize:"1.4rem"})};
`
const Desc = styled.p`
    padding:10px 0;
    color:#696969;
    font-size:1.1rem;
    font-weight:600;
    ${mobile({fontSize:"0.6rem",fontWeight:"500"})};
`
const Features = styled.div`
    width:100%;
    padding:20px 0;
    display:flex;
    align-items: center;
    border-bottom: 2px solid ${props=>props.color};
    ${mobile({padding:"10px 0"})};
`
const ImageContainer = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content:flex-start;
`
const FeatureImg = styled.img`
    ${mobile({width:"25px"})};
`
const FeatureDesc = styled.p`
    flex:3.5;
    font-weight:500;
    color:${props=>props.color};
    ${mobile({fontSize:"0.7rem"})};
`
const Button = styled.button`
    border:2px solid #1EA5FC;
    background-color:white;
    color:#1EA5FC;
    width:100%;
    padding:20px 0;
    border-radius:10px;
    font-weight:600;
    font-size:1rem;
    cursor:pointer;
    margin-top:${props=>props.type === "Standard" && "35px"};
    ${mobile({padding:"8px",fontSize:"0.8rem"})};
    
`

const Card = ({item}) => {
    return (
        <Container type={item.title === "Standard" && "Standard"}>
            <RibbonImage type={item.title === "Standard" && "Standard"} src={Ribbon}/>
            <CardContainer type={item.title === "Standard" && "Standard"}>
                <Title color={item.color} type={item.title === "Standard" && "Standard"}>{item.title}</Title>
                <Price type={item.title === "Standard" && "Standard"}>
                <PriceCurrency type={item.title === "Standard" && "Standard"}>$</PriceCurrency>{item.price}</Price>
                <Desc>{item.desc}</Desc>
                {item.features.map((featureItem,index)=>(
                    <Features color={(item.features.length - 1) === index ? "white" : "#EEE8E8"}>
                        <ImageContainer>
                            <FeatureImg alt="img" src={featureItem.img}/>
                        </ImageContainer>
                        <FeatureDesc color={featureItem.color}>{featureItem.feature}</FeatureDesc>
                    </Features>
                ))}
                <Button type={item.title === "Standard" && "Standard"}>Contact Us</Button>
            </CardContainer>
        </Container>
    )
}

export default Card;
