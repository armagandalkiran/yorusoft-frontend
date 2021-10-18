import styled from "styled-components";
import Card from "../components/Card";
import {PricingCardItems} from "../data";
import {mobile} from "../responsive";

const Container = styled.div`
    height:80vh;
    ${mobile({height:"auto"})};
`
const Wrapper = styled.div`
    height:100%;
    display:flex;
    justify-content:space-evenly;
    ${mobile({flexDirection:"column",alignItems:"Center"})};
`



const Cards = () => {
    return (
        <Container>
            <Wrapper>
                {PricingCardItems.map((item)=>(
                    <Card item={item} key={item.id}></Card>
                ))}
            </Wrapper>
        </Container>
    )
}

export default Cards
