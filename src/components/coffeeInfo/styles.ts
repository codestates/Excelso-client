import styled from "styled-components/macro";
import { Image } from "../coffeelist/styles";

export const CoffeeInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  background: #efebe9;
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 90%;
  flex: 1;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 420px;
  height: 466px;
  border-radius: 50%;
  overflow: hidden;
  background: white;
  flex: 1;
`;

export const InfoImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 0px;
  border: 2px;
`;
export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 40px;
`;
export const CoffeeNutrition = styled.strong`
  color: brown;
`;

export const Space = styled.div`
  /* border: 1px solid red; */
  height: 107px;
`;

export const TextContainer = styled.div``;
export const CoffeeTitle = styled.h1``;
export const CoffeeDesc = styled.p`
  margin-top: 10px;
`;

export const Infos = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 160px 160px;
`;

export const Info = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
