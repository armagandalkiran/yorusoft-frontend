import React from "react";
import styled from "styled-components";
import backgroundImage from "../svgs/home_background.svg";
import svgedTextImage from "../svgs/svged_text.svg";
import arrow from "../svgs/arrow.svg";
import Slider from "../components/Slider";
import { mobile, smallMobile, smallLaptop } from "../responsive";

const Container = styled.div`
  height: 100vh;
  ${mobile({ height: "auto" })}
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  position: relative;
`;
const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const AnnouncementContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 100px;
  ${smallMobile({ marginTop: "50px" })};
`;
const MainText = styled.h1`
  text-align: center;
  width: 75%;
  font-size: 4rem;
  font-weight: 900;
  color: #03004e;
  ${smallLaptop({ fontSize: "3rem" })};
  ${mobile({ fontSize: "1.5rem" })};
  ${smallMobile({ fontSize: "1.2rem" })};
`;
const SvgedText = styled.span`
  background-repeat: no-repeat;
  background-position: bottom;
`;
const MainTextBottom = styled.div`
  ${mobile({
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })};
`;
const SubTextContainer = styled.div`
  margin-top: 80px;
  text-align: left;
  ${mobile({ marginTop: "1.5rem" })};
`;
const SubText = styled.p`
  font-size: 1.5rem;
  ${mobile({ fontSize: "1rem" })};
  ${smallMobile({ fontSize: "0.8rem", padding: " 0 20px" })};
  color: #696969;
`;
const SubColoredText = styled.span`
  color: #5668d1;
`;
const AnnouncementBottom = styled.div`
  margin-top: 20px;
  width: 100%;
  ${smallMobile({ padding: " 0 30px" })};
`;

const ArrowIcon = styled.img`
  ${mobile({ width: "4rem" })};
  ${smallMobile({ width: "3.5rem" })};
`;
const Button = styled.button`
  margin-left: 20px;
  width: 291px;
  height: 66px;
  ${mobile({ width: "9rem", height: "4rem", fontSize: "1rem" })};
  ${smallMobile({ width: "6rem", height: "3rem", fontSize: "0.7rem" })};
  border-radius: 50px;
  border: 1px solid #ffe598;
  background-color: #ffe598;
  color: #696969;
  font-weight: 800;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover{
    background-color: #FFEAAA;
    transition:0.3s ease-in-out;
  }
`;

const Home = () => {
  return (
    <Container style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Wrapper>
        <AnnouncementContainer>
          <MainText>FAST, SAFE, CUSTOM.</MainText>
          <MainText>
            WHAT ALL PROFESSIONALS
            <SvgedText style={{ backgroundImage: `url(${svgedTextImage})` }}>
              {" "}
              LOOKING FOR
            </SvgedText>
          </MainText>
          <MainTextBottom>
            <SubTextContainer>
              <SubText>
                Bring your ideas and{" "}
                <SubColoredText>let us realize.</SubColoredText>
              </SubText>
              <SubText>
                <SubColoredText>No idea ? </SubColoredText>We can also make your
                design.
              </SubText>
            </SubTextContainer>
            <AnnouncementBottom>
              <ArrowIcon src={arrow}></ArrowIcon>
              <Button>Contact Us</Button>
            </AnnouncementBottom>
          </MainTextBottom>
        </AnnouncementContainer>
        <Slider />
      </Wrapper>
    </Container>
  );
};

export default Home;
