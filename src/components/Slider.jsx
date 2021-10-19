import styled from "styled-components";
import { sliderItems } from "../data";
import { keyframes } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  ${mobile({ position: "relative", marginTop: "4rem" })}
`;
const Title = styled.p`
  color: #c2bfbf;
  font-size: 1.5rem;
  text-align: center;
  ${mobile({ fontSize: "1rem" })}
`;

const ImageContainer = styled.div`
  width: 720px;
  ${mobile({ width: "300px" })}
  height:20vh;
  overflow: hidden;
`;
const Scroll = keyframes`
    0% {transform: translateX(0);}
    100% {transform:translateX(-720px);}
`;
const ScrollMobile = keyframes`
    0% {transform: translateX(0);}
    100% {transform:translateX(-300px);}
`;
const SliderTrack = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  animation: ${Scroll} 10s linear infinite;

  @media (max-width: 768px) {
    animation: ${ScrollMobile} 10s linear infinite;
  }
`;
const Slide = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  ${mobile({ width: "100px" })}
  flex-shrink:0;
  font-size: 5rem;
`;
const Image = styled.img`
  padding: 0 30px;
  ${mobile({ width: "150px" })}
`;

const Slider = () => {
  return (
    <Container>
      <Title>Our Amazing Partners</Title>
      <ImageContainer>
        <SliderTrack>
          {[...sliderItems,...sliderItems].map((item, index) => (
            <Slide key={index}>
              <Image src={item.img}></Image>
            </Slide>
          ))}
        </SliderTrack>
      </ImageContainer>
    </Container>
  );
};

export default Slider;
