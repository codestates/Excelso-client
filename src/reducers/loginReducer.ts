import axios from 'axios';
import { Dispatch } from 'redux';
//action type
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export type successPayloadType = { 
  accessToken: string 
  info: {
    id: number,
    email: string,
    nickname: string,
  },
  message: string
}

export interface loginSuccessDispatch {
  type: typeof LOGIN_SUCCESS,
  payload: successPayloadType,
}

export interface loginFailDispatch {
  type: typeof LOGIN_FAIL
} 

export type loginDispatchType = loginSuccessDispatch | loginFailDispatch;

//action
export const postUser = (email:string, password:string) => async (dispatch: Dispatch<loginDispatchType>) => {
  try {
    const userData = await axios.post('http://localhost:3000/user/login', {
      email,
      password,
    }).then((res) => {
      return res.data
    })

    dispatch({
      type: LOGIN_SUCCESS,
      payload: userData,
    })
  }catch(err) {
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}



//reducer
interface initialState {
  success: boolean,
  info?: successPayloadType,
  accessToken?: successPayloadType

}
const initialState: initialState = {
  success: false,
  
}


const loginReducer = ( state = initialState, action:loginDispatchType ) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return {
        ...state,
        success: false,
      }
    case LOGIN_SUCCESS:
      const { accessToken, info } = action.payload
      sessionStorage.setItem("accessToken", JSON.stringify(accessToken));
      sessionStorage.setItem("info", JSON.stringify(info))

      return {
        ...state,
        success: true,
        accessToken,
        info: {
          id: info.id,
          email: info.email,
          nickname: info.nickname,
        }
      }
    default:
        return state;
  }
}

export default loginReducer;