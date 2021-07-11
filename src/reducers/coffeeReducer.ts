import { Dispatch } from "redux";
import axios from "axios";

const ALL = "ALL";
const COFFEE = "COFFEE";
const TEA = "TEA";
const SMOOTHIE = "SMOOTHIE";

export type CoffeeT = {
  id: number;
  title: string;
  src: string;
  category: string;
  desc: string;
  coffee_brand_id: number;
  ml: number;
  kcal: number;
  caffeine: number;
  sugar: number;
  protein: number;
  salt: number;
  fat: number;
  brand_id: number;
};

export interface CoffeeI {
  coffees: CoffeeT[];
}

const defaultState: CoffeeI = {
  coffees: [],
};

export interface ALLI {
  type: typeof ALL;
  coffees: CoffeeT[];
}

export interface COFFEEI {
  type: typeof COFFEE;
  coffees: CoffeeT[];
}

export interface TEAI {
  type: typeof TEA;
  coffees: CoffeeT[];
}

export interface SMOOTHIEI {
  type: typeof SMOOTHIE;
  coffees: CoffeeT[];
}

export type CoffeeDispatch = ALLI | COFFEEI | TEAI | SMOOTHIEI;

export const coffeeList = (value: any = "ALL") => {
  return async (dispatch: Dispatch<CoffeeDispatch>) => {
    const response = await axios.get("http://localhost:3000/coffee/coffeeInfo");
    const data: CoffeeT[] = await response.data;
    return dispatch({
      type: value,
      coffees: data,
    });
  };
};

export const allCoffeeReducer = (
  state: CoffeeI = defaultState,
  action: CoffeeDispatch
): CoffeeI => {
  switch (action.type) {
    case ALL:
      console.log("ALL");
      return {
        ...state,
        coffees: action.coffees,
      };
    case COFFEE:
      console.log("COFFEE");
      return {
        ...state,
        coffees: action.coffees.filter(
          (c) => c.category === COFFEE.toLocaleLowerCase()
        ),
      };
    case TEA:
      return {
        ...state,
        coffees: action.coffees.filter(
          (c) => c.category === TEA.toLocaleLowerCase()
        ),
      };
    case SMOOTHIE:
      return {
        ...state,
        coffees: action.coffees.filter(
          (c) => c.category === SMOOTHIE.toLocaleLowerCase()
        ),
      };
    default:
      return state;
  }
};
