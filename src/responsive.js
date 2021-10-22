import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 1000px) {
      ${props}
    }
  `;
};

export const smallMobile = (props) => {
  return css`
    @media only screen and (max-width: 360px) {
      ${props}
    }
  `;
};

export const smallLaptop = (props) => {
  return css`
    @media only screen and (max-width: 1580px) {
      ${props}
    }
  `;
};
