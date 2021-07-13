import React, { useEffect, useState } from "react";
import CoffeeInfo from "../components/coffeeInfo";
import { RootState } from "../reducers/index";
import { useDispatch, useSelector } from "react-redux";
import { getReviewAction } from "../reducers/reviewReducer";
import { coffeeList } from "../reducers/coffeeReducer";
import ReviewModal from "../components/reviewmodal";

function CoffeesInfo({ location }: any) {
  const dispatch = useDispatch();
  const path = Number(location.pathname.split("/")[2]);
  const coffees = useSelector((state: RootState) => state.coffee.coffees);
  // const reviews = useSelector((state: RootState) => state.getRivew.reviews);
  const suitCoffee = coffees.filter(c => c.id === path);

  const [show, Setshow] = useState(false);

  const handleShow = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e.target);
    // e.currentTarget.textContent === "등록하기" && Setshow(!show);
    if (e.target !== e.currentTarget) return;
    Setshow(!show);
  };

  useEffect(() => {
    // 커피메뉴목록 호출
    dispatch(coffeeList());
  }, [dispatch]);

  useEffect(() => {
    // console.log("useEffet getReviewAction"); 기존의 작성되어있는 리뷰 호출
    dispatch(getReviewAction(path));
  }, [dispatch, path]);
  return (
    <>
      {/* <CoffeeInfo
        path={path}
        suitCoffee={suitCoffee[0]}
        reviews={reviews}
        handleShow={handleShow}
      ></CoffeeInfo>
      <ReviewModal
        reviews={reviews}
        show={show}
        handleShow={handleShow}
        path={path}
      ></ReviewModal> */}
    </>
  );
}

export default CoffeesInfo;
