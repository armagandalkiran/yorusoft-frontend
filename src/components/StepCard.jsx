import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 21px;
  flex-direction: ${(props) => props.flexDirection.directionCol};
`;

Container.defaultProps = {
  flexDirection: {
    directionCol: "row",
  },
};

const flexDirection = {
  directionCol: "column",
};


const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SquareImage = styled.img`
  width: 45px;
  height: 45px;
`;

const Description = styled.div`
  position:${(props) => props.descriptionMobile.position};
  text-align: center;
`;

Description.defaultProps = {
    descriptionMobile: {
      position:"absolute"
    },
  };

const descriptionMobile = {
  position:"initial"
};

const Title = styled.h3`
  text-align: center;
  color: #03004e;
  margin-top:20px;
`;

const Text = styled.p`
  text-align: center;
  color: #03004e;
  font-weight: 200;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

function StepCard(props) {
  const { left, right, color, icon, description, descriptionTitle, mobile } =
    props;
  return (
    <Wrapper>
      <Container flexDirection={mobile ? flexDirection :flexDirection.defaultProps}>
        {!mobile ? (left ? <Circle color={color} /> : <Circle />):null}
        <Square color={color}>
          <SquareImage src={icon} />
        </Square>
        {!mobile ? (right ? <Circle color={color} /> : <Circle />):null}
      </Container>
      <Description descriptionMobile={mobile ? descriptionMobile : descriptionMobile.defaultProps}>
        <Title> {descriptionTitle}</Title>
        <Text>{description}</Text>
      </Description>
    </Wrapper>
  );
}

StepCard.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  mobie: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.string,
  descriptionTitle: PropTypes.string,
  description: PropTypes.string,
};

StepCard.defaultProps = {
  left: false,
  right: false,
  mobile: false,
  color: "",
  icon: "",
  descriptionTitle: "",
  description: "",
};

export default StepCard;
