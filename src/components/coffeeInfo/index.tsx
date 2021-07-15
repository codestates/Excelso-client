import React, { useState } from "react";
import Reviews from "../reviews";
import Toggle from "../toggle";
import {
  CoffeeInfoContainer,
  Pane,
  InfoImage,
  CoffeeTitle,
  InfoContainer,
  CoffeeNutrition,
  TextContainer,
  CoffeeDesc,
  ImageContainer,
  Space,
  Infos,
  Info,
} from "./styles";
import { CoffeeT } from "../../reducers/coffeeReducer";
import { reviewT } from "../../reducers/reviewReducer";

interface CoffeeInfoI {
  suitCoffee: CoffeeT;
  children?: JSX.Element;
  handleShow: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  path: number;
  reviews: reviewT[];
}

export default function CoffeeInfo({
  suitCoffee,
  handleShow,
  path,
  reviews,
}: CoffeeInfoI) {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return suitCoffee ? (
    <CoffeeInfoContainer>
      <InfoContainer>
        <TextContainer>
          <Space />
          <CoffeeTitle>{suitCoffee.title}</CoffeeTitle>
          <CoffeeDesc>{suitCoffee.desc}</CoffeeDesc>
        </TextContainer>
        <div>
          <Space style={{ height: "50px" }} />
          <div style={{ width: "300px", borderBottom: "0.5px solid black" }}>
            <h3>영양정보</h3>
            <p>1회 제공량 기준</p>
            <Space style={{ height: "24px" }} />
            <p>
              제공량(ml) <CoffeeNutrition>{suitCoffee.ml}</CoffeeNutrition>
            </p>
          </div>
          <Infos>
            <Info>
              열량(kcal)<CoffeeNutrition>{suitCoffee.kcal}</CoffeeNutrition>
            </Info>
            <Info>
              단백질(g)<CoffeeNutrition>{suitCoffee.protein}</CoffeeNutrition>
            </Info>
            <Info>
              당류(g)<CoffeeNutrition>{suitCoffee.sugar}</CoffeeNutrition>
            </Info>
            <Info>
              나트륨(mg)<CoffeeNutrition>{suitCoffee.salt}</CoffeeNutrition>
            </Info>
            <Info>
              포화지방(g)<CoffeeNutrition>{suitCoffee.fat}</CoffeeNutrition>
            </Info>
            <Info>
              카페인(mg)<CoffeeNutrition>{suitCoffee.caffeine}</CoffeeNutrition>
            </Info>
          </Infos>
        </div>
      </InfoContainer>
      <ImageContainer>
        <InfoImage src={suitCoffee.src} />
      </ImageContainer>
      <Pane>
        <Space />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
            marginRight: "30px",
          }}
        >
          OFF
          <Toggle bookmark={toggle} onToggle={onToggle} />
          ON
        </div>
        <Reviews handleShow={handleShow} path={path} reviews={reviews} />
      </Pane>
    </CoffeeInfoContainer>
  ) : (
    <div>Loading</div>
  );
}
