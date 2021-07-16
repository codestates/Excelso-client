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
  padding: 6vw 1vw;
`;

export const FootLogo = styled.div`
  p {
    color: white;
    font-size: 6vw;
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
