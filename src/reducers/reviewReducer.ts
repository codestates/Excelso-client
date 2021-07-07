import axios from "axios";
import { Dispatch } from "redux";

const GET_REVIEW = "GET_REVIEW";
const ADD_REVIEW = "ADD_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";

interface ADDREVIEW {
  type: typeof ADD_REVIEW;
  message: "등록성공";
}

interface DELETEREVIEW {
  type: typeof DELETE_REVIEW;
  message: "삭제성공";
}

interface GETREVIEW {
  type: typeof GET_REVIEW;
  review: reviewI;
}

type PostReviewDispatch = ADDREVIEW | DELETEREVIEW;
export const addReviewAction = (
  coffee_id: number,
  content: string,
  rating: number,
  token: string
) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post("/review/update", {
      coffee_id,
      content,
      rating,
      token,
    });
    const data = await response.data;

    return dispatch({
      type: ADD_REVIEW,
      message: data,
    });
  };
};

export const deleteReivewAction = (coffee_id: number, token: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post("/review/delete", {
      coffee_id,
      token,
    });
    const data = await response.data;

    return dispatch({
      type: DELETE_REVIEW,
      message: data,
    });
  };
};

export const getReviewAction = (coffee_id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/review/${coffee_id}`
      );
      const data = await response.data;
      return dispatch({
        type: GET_REVIEW,
        review: data[0],
      });
    } catch (err) {
      return dispatch({
        type: GET_REVIEW,
        review: {},
      });
    }
  };
};
interface PostReview {
  message: string;
}

const defaultState: PostReview = {
  message: "",
};

export const PostReviewReducer = (
  state: PostReview = defaultState,
  action: PostReviewDispatch
): PostReview => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        message: "등록성공",
      };
    case DELETE_REVIEW:
      return {
        message: "삭제성공",
      };
    default:
      return state;
  }
};

export interface reviewI {
  id: number;
  content: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  coffee_id: number;
  user_id: number;
  nickname: string;
  email: string;
}

const defaultState2 = {
  review: {},
};

export const GetReviewReducer = (state = defaultState2, action: GETREVIEW) => {
  switch (action.type) {
    case GET_REVIEW:
      return {
        review: action.review,
      };
    default:
      return state;
  }
};
