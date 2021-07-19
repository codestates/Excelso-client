import styled from "styled-components/macro";

export const FootDiv = styled.div`
  display: flex;
  display: block;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30vh;
  background-color: #262223;
  color: white;
  text-align: center;
  padding: 4.5vw 1vw;
`;

export const FootLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;

  div {
    color: white;
    font-size: 7vw;
  }
`;

export const Members = styled.div`
  display: inline;
  span {
    color: white;
    margin: 1.5vw;
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: purple;
    }
  }
`;
