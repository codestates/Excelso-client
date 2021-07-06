import React from "react";
import {
  CoffeeInfoContainer,
  Pane,
  InfoImage,
  CoffeeTitle,
  InfoContainer,
  CoffeeNutrition,
  TextContainer,
  CoffeeDesc,
} from "./styles";
import { CoffeeT } from "../../reducers/coffeeReducer";
interface CoffeeInfoI {
  suitCoffee: CoffeeT;
}

export default function CoffeeInfo({ suitCoffee }: CoffeeInfoI) {
  return suitCoffee ? (
    <CoffeeInfoContainer>
      <Pane>
        <InfoImage src={suitCoffee.src} />
      </Pane>
      <Pane>
        <CoffeeTitle>{suitCoffee.title}</CoffeeTitle>
        <InfoContainer>
          <CoffeeNutrition>{suitCoffee.ml}ml</CoffeeNutrition>
          <CoffeeNutrition>{suitCoffee.sugar}sugar</CoffeeNutrition>
          <CoffeeNutrition>{suitCoffee.caffeine}caffeine</CoffeeNutrition>
          <CoffeeNutrition>{suitCoffee.kcal}kcal</CoffeeNutrition>
        </InfoContainer>
        <TextContainer>
          <CoffeeDesc>{suitCoffee.desc}</CoffeeDesc>
        </TextContainer>
      </Pane>
    </CoffeeInfoContainer>
  ) : (
    <div>Loading</div>
  );
}
