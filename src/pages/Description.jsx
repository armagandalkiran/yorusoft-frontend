
import styled from "styled-components";
import { DescCardItems } from "../data";
import {mobile} from "../responsive";

const Container = styled.div`
  height: 80vh;
  ${mobile({height:"70vh"})};
`;
const Title = styled.h1`
  margin-top: 90px;
  color: #03004e;
  font-size: 64px;
  ${mobile({fontSize:"1.5rem",marginTop:"0"})};
  text-align: center;
`;
const Grid = styled.div`
  height: 60vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0 100px;
  ${mobile({padding:"10px",gap:"0"})};
  gap: 0 20px;
`;
const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const GridDescItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  ${mobile({width:"85px"})};
`;
const Shapes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Square = styled.div`
  width: 120px;
  height: 120px;
  ${mobile({width:"65px",height:"65px"})};
  border-radius: 10px;
  background-color: ${(props) => props.color};
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${"" /*how it works ? */}
  display:flex;
  align-items: center;
  justify-content: center;
`;

const SquareImage = styled.img`
  ${mobile({width:"20px"})};

`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: absolute;
  right: ${(props) => props.type === "right" && 0};
  left: ${(props) => props.type === "left" && 0};
  ${mobile({display:"none"})};
`;
const LineContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
`;
const HorizontalLine = styled.hr`
  width: 15px;
  border: 3px solid #e5e5e5;
  ${mobile({width:"5px",border:"1px solid #e5e5e5"})};
  background-color:#e5e5e5;
`;
const CardTitle = styled.h3`
  text-align: center;
  color: #03004e;
  margin-bottom: 10px;
  ${mobile({fontSize:"0.8rem"})};
`;
const CardDesc = styled.p`
  text-align: center;
  color: #03004e;
  ${mobile({fontSize:"0.6rem"})};

`;

const Description = () => {
  return (
    <Container>
      <Title>How it works ?</Title>
      <Grid>
        {DescCardItems.map((item, index) => (
          <>
            <GridItem>
              <Shapes>
                <Square color={item.color}>
                  <SquareImage src={item.img}></SquareImage>
                </Square>
                <Circle type={index === 2 ? "left" : "right"} color={item.color}></Circle>
                {index === 1 && <Circle type="left" color={item.color}></Circle>}
              </Shapes>
            </GridItem>
            {index < 2 && (
              <GridItem>
                <LineContainer>
                  {[...Array(9).keys()].map((item, index) => (
                    <HorizontalLine key={index}></HorizontalLine>
                  ))}
                </LineContainer>
              </GridItem>
            )}
          </>
        ))}

        {DescCardItems.map((item, index) => (
          <>
            <GridDescItem>
                <CardTitle>{item.title}</CardTitle>
                    <CardDesc>{item.desc}</CardDesc>
            </GridDescItem>
            {index < 2 && (
              <GridItem>
              </GridItem>
            )}
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default Description;
