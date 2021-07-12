// import { isAbsolute } from "path";
import styled from "styled-components";

export const LoadDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 100;
  width: 9rem;
  height: 9rem;
  margin: -4.54rem 0 0 -4.5rem;
  background-color: #262223;
  border: 1rem solid #ddc6b6;
  border-radius: 2rem;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
