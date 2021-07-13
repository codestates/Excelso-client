import styled from "styled-components/macro";
import { ItemI } from "./index";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  max-width: 250;
  grid-gap: 0px;
`;

export const Item = styled(Link)<ItemI>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid black;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover {
    transform: translateY(-20px);
    transition: all 1s ease-out;
  }
`;
export const Image = styled.img`
  margin: 0;
  padding: 0;
  border-radius: 50%;
  overflow: hidden;
  width: 250px;
  height: 300px;
`;
