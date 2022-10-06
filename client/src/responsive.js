import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};
// Tablet Responsive Design

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 780px) {
    }
  `;
};
