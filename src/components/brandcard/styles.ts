import styled from "styled-components";

export const BrandCardContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
export const BrandCardInner = styled.div`
  background-image: url("http://paikdabang.com/wp-content/themes/paikdabang/assets/images/ceo.jpg");
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  height: 535px;
  position: relative;
`;
export const Image = styled.img``;
export const Title = styled.h1``;
export const Desc = styled.p`
  width: 100%;
  z-index: 10;
  transition: height 0.5s;
  backdrop-filter: blur(15px);

  &:hover {
    height: 300px;
  }
`;
