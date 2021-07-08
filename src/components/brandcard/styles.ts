import styled from "styled-components";

export const BrandCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  height: 100vh;
`;
export const BrandCardInner = styled.div`
  margin: 0 auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  height: 535px;
  background-size: contain; // coffee-bean => cover
  background-repeat: no-repeat;
  /* background-position: 110px -100px; */ //폴바셋
  /* background-position: 10px; 달콤 */
  /* background-position: 10px; starbucks */
`;
export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  /* object-position: 0px -100px; */
`;
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
