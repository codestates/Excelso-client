import React, { useEffect } from "react";
import { RootState } from "../reducers/index";
import { useDispatch, useSelector } from "react-redux";
import CoffeeList from "../components/coffeelist";
import Filterbar from "../components/filterbar";
import { coffeeList } from "../reducers/coffeeReducer";

export default function Menulist() {
  const dispatch = useDispatch();
  const coffees = useSelector((state: RootState) => state.coffee.coffees);
  console.log(coffees);
  useEffect(() => {
    dispatch(coffeeList());
  }, [dispatch]);

  return (
    <>
      <Filterbar></Filterbar>
      <CoffeeList coffees={coffees}></CoffeeList>
    </>
  );
}
