import styled from "styled-components";

export const BrandCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 1rem;
  width: 100%;
  height: 100vh;
  div.cardContainer div {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: all 1s;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    padding-top: 80px;
    text-align: center;
  }

  div.cardContainer:hover div:first-child {
    transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
  }

  div.cardContainer:hover div:last-child {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
  }
`;

export const BrandCardInner = styled.div`
  margin: 0 auto;
  height: 30rem;
  border-radius: 1rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: contain; // coffee-bean => cover
  background-repeat: no-repeat;

  /* background-position: 110px -100px; */ //폴바셋
  /* background-position: 10px; 달콤 */
  /* background-position: 10px; starbucks */
`;

export const BrandCardHidden = styled.div`
  position: relative;
  top: -300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  /* object-position: 0px -100px; */
`;
export const Title = styled.h1``;

export const Desc = styled.p`
  width: 100%;
`;
