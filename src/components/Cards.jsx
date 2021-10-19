import styled from "styled-components";
import Card from "../components/Card";
import {PricingCardItems} from "../data";
import {smallLaptop} from "../responsive";

const Container = styled.div`
    ${smallLaptop({height:"auto"})};
`
const Wrapper = styled.div`
    height:100%;
    display:flex;
    justify-content:space-evenly;
    ${smallLaptop({flexDirection:"column",alignItems:"Center"})};
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
