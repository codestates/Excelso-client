import React, { useEffect } from "react";
import CoffeeInfo from "../components/coffeeInfo";
import Reviews from "../components/reviews";
import { RootState } from "../reducers/index";
import { useDispatch, useSelector } from "react-redux";
import { getReviewAction } from "../reducers/reviewReducer";
import { coffeeList } from "../reducers/coffeeReducer";

function CoffeesInfo({ location }: any) {
  const dispatch = useDispatch();
  const path = Number(location.pathname.split("/")[2]);
  const coffees = useSelector((state: RootState) => state.coffee.coffees);
  const review = useSelector((state: RootState) => state.getRivew.review);
  const suitCoffee = coffees.filter((c) => c.id === path);

  useEffect(() => {
    dispatch(coffeeList());
    dispatch(getReviewAction(path));
  }, [dispatch, path]);

  return (
    <>
      <CoffeeInfo suitCoffee={suitCoffee[0]}></CoffeeInfo>;
      <Reviews review={review}></Reviews>
    </>
  );
}

export default CoffeesInfo;
