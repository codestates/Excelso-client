import axios from "axios";
import { Dispatch } from "redux";
//action type
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SET_LOGIN = "SET_LOGIN";
require("dotenv").config();
const url = process.env.REACT_APP_API_ROOT;

export type successPayloadType = {
  accessToken: string;
  info: {
    id: number;
    email: string;
    nickname: string;
  };
  message: string;
};

export interface successPayloadTypeI {
  accessToken: string;
  info: {
    id: number;
    email: string;
    nickname: string;
  };
  success: boolean;
}

export interface loginSuccessDispatch {
  type: typeof LOGIN_SUCCESS;
  payload: successPayloadType;
}

export interface loginFailDispatch {
  type: typeof LOGIN_FAIL;
}

export interface loginstateDispatch {
  type: typeof LOGIN_SUCCESS;
  payload: successPayloadType;
}

export type loginDispatchType =
  | loginSuccessDispatch
  | loginFailDispatch
  | loginstateDispatch;

//action
export const setLogin = (accessToken: string) => {
  return async (dispatch: Dispatch<loginstateDispatch>) => {
    try {
      console.log("로그인유지시도");
      // console.log(token)
      const response = await axios.post(`${url}/auth`, {
        accessToken
      });
      const data = await response.data;
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const googleUser = (googleData: any) => async (
  dispatch: Dispatch<loginDispatchType>
) => {
  try {
    console.log("Start requset of postUser");
    await axios
      .post(`${url}/api/v1/auth/google`, {
        token: googleData.tokenId
      })
      .then(res => {
        return dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
      });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const postUser = (email: string, password: string) => async (
  dispatch: Dispatch<loginDispatchType>
) => {
  try {
    console.log("Start requset of postUser");
    await axios
      .post(`${url}/user/login`, {
        email,
        password
      })
      .then(res => {
        return dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
      });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//reducer
export interface InitialState {
  success: boolean;
  info?: successPayloadType;
  accessToken?: successPayloadType;
}
const initialState: InitialState = {
  success: false
};

const loginReducer = (state = initialState, action: loginDispatchType) => {
  switch (action.type) {
    case LOGIN_FAIL:
      console.log("LOGIN_FAIL");
      return {
        ...state,
        success: false
      };
    case LOGIN_SUCCESS:
      console.log("LOGIN_SUCCESS & 로그인유지성공");
      let { accessToken, info } = action.payload;
      sessionStorage.setItem("accessToken", JSON.stringify(accessToken));
      // window.location.replace("/");
      return {
        ...state,
        success: true,
        accessToken,
        info: {
          id: info.id,
          email: info.email,
          nickname: info.nickname
        }
      };
    // case SET_LOGIN:
    //   console.log("SET_LOGIN");
    //   return {
    //     ...state,
    //     success: true,
    //     token,
    //     info: {
    //       id: info.id,
    //       email: info.email,
    //       nickname: info.nickname,
    //     },
    //   };
    default:
      return state;
  }
};

export default loginReducer;
