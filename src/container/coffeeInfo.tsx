import React, { useEffect, useState } from "react";
import CoffeeInfo from "../components/coffeeInfo";
import { RootState } from "../reducers/index";
import { useDispatch, useSelector } from "react-redux";
import { getReviewAction, reviewI } from "../reducers/reviewReducer";
import { coffeeList } from "../reducers/coffeeReducer";
import ReviewModal from "../components/reviewmodal";

function CoffeesInfo({ location }: any) {
  const dispatch = useDispatch();
  const path = Number(location.pathname.split("/")[2]);
  const coffees = useSelector((state: RootState) => state.coffee.coffees);
  const reviews = useSelector((state: RootState) => state.getRivew.reviews);
  const suitCoffee = coffees.filter((c) => c.id === path);

  const [show, Setshow] = useState(false);

  const handleShow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) return;
    Setshow(!show);
  };

  useEffect(() => {
    dispatch(coffeeList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReviewAction(path));
  }, [path]);
  return (
    <>
      <CoffeeInfo
        suitCoffee={suitCoffee[0]}
        reviews={reviews}
        handleShow={handleShow}
      ></CoffeeInfo>
      <ReviewModal
        show={show}
        handleShow={handleShow}
        path={path}
      ></ReviewModal>
    </>
  );
}

export default CoffeesInfo;
