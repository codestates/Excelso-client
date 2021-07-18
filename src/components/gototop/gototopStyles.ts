import styled from "styled-components";

export const GoContainer = styled.div`
  button {
    position: fixed;
    bottom: 1.8vh;
    right: 4vw;
    z-index: 99;
    cursor: pointer;
    font-size: 1.5vw;
    background-color: inherit;
    border: solid #cfcecc;
    border-width: 0 0.3vw 0.3vw 0;
    display: inline-block;
    padding: 1vw;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
  button: hover {
    bottom: 2vw;
  }
`;
