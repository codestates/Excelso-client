import styled from "styled-components/macro";

export const FootDiv = styled.div`
  display: flex;
  display: block;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 18rem;
  background-color: #262223;
  color: white;
  text-align: center;
  padding: 5rem 1rem;
`;

export const FootLogo = styled.div`
  p {
    color: white;
    font-size: 4.8rem;
  }
`;

export const Members = styled.div`
  display: inline;
  margin-top: 2.5rem;
  span {
    color: white;
    margin: 0.7rem;
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: purple;
    }
  }
`;
