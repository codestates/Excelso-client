import styled from "styled-components/macro";
interface StarI {
  on: boolean;
}

export const StarContainer = styled.div``;

export const Star = styled.button<StarI>`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  color: ${(props) => (props.on ? "yellow" : "black")};
`;
