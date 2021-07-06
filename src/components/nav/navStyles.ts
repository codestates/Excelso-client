import styled from "styled-components/macro";

export const NavContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%
    height: 4rem;
    padding-left: .5rem;
    padding-right: 2rem;
    z-index: 50;
    display: flex
    justify-content: space-between;
    align-items: center;
`;

export const NavDiv = styled.div`
  width: 8rem;
  height: 4rem;
  padding: 0.2rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-itmes: center;
`;

export const Button = styled.button`
  background: transparent;
  color: black;
  border: 0;
  padding: 0.5rem;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0.5rem;
`;

export const Logo = styled.button`
  margin: 0.5rem;
  padding: 0.2rem;
  font-weight: 500;
  font-size: 1.5rem;
`;
