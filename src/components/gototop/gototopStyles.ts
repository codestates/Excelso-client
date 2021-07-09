import styled from "styled-components";

export const GoContainer = styled.div`
  button {
    position: fixed;
    bottom: 1.25rem;
    right: 1.875rem;
    z-index: 99;
    cursor: pointer;
    font-size: 1.125rem;
    background-color: inherit;
    border: solid pink;
    border-width: 0 0.2rem 0.2rem 0;
    display: inline-block;
    padding: 0.625rem;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
  button: hover {
    bottom: 1.56rem;
  }
`;
