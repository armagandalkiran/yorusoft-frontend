import styled from "styled-components";
import { DescCardItems } from "../data";
import { mobile, smallMobile } from "../responsive";
import useWindowSize from "../hooks/useWindowSize";
import StepCard from "../components/StepCard";

const Container = styled.div`
height:60vh;
padding:0 100px;
  ${mobile({ height:"100%",padding:"20px 0"})};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.mobileWrapper.direction};
  margin-top: ${(props) => props.mobileWrapper.marginTop};
  padding: ${(props) => props.mobileWrapper.padding};
`;

Wrapper.defaultProps = {
  mobileWrapper: {
    direction: "row",
    marginTop:"150px",
    padding:"0 150px",
  },
};

const mobileWrapper = {
  direction: "column",
  marginTop:"0",
  padding:"0",
};

const CardWrapper = styled.div`
  position: relative;
`;
const Title = styled.h1`
  margin-top: 90px;
  margin-bottom:90px;
  color: #03004e;
  font-size: 64px;
  ${mobile({ fontSize: "1.5rem", marginTop: "0" })};
  ${smallMobile({ marginTop: "50px" })};
  text-align: center;
`;

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  ${mobile({ flexDirection: "column", height: "100px" })};
`;
const HorizontalLine = styled.hr`
  width: 15px;
  border: 2px solid #e5e5e5;
  ${mobile({
    width: "5px",
    border: "1px solid #e5e5e5",
    transform: "rotate(90deg)",
  })};
  background-color: #e5e5e5;
`;

const Description = () => {
  const { width } = useWindowSize();

  return (
    <Container>
      <Title>How it works ?</Title>
        <Wrapper mobileWrapper={width <= 1000 ? mobileWrapper : false}>
          {DescCardItems.map((item, index) => (
            <>
              <CardWrapper>
                <StepCard
                  left={item.left}
                  right={item.right}
                  color={item.color}
                  icon={item.img}
                  descriptionTitle={item.title}
                  description={item.desc}
                  mobile={width <= 1000 ? mobile : false}
                />
              </CardWrapper>

              {index < 2 ? (
                <LineContainer>
                  {[...Array(9).keys()].map((item, index) => (
                    <>
                      <HorizontalLine key={index}></HorizontalLine>
                    </>
                  ))}
                </LineContainer>
              ) : null}
            </>
          ))}
        </Wrapper>
    </Container>
  );
};

export default Description;
