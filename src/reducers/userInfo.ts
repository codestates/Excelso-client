// 액션 타입 선언

export const ADD_USER = 'userInfo/ADD_USER' as const;
export const REMOVE_USER = 'userInfo/REMOVE_USER' as const;

type userData = {
  id: number;
  email: string;
  nickname: string;
}

// 액션 함수 선언
export const addUserData = (data: userData) => ({
  type: ADD_USER,
  payload: data,
}) 

export const removeUserData = () => ({
  type: REMOVE_USER,
})

type userAction =
  | ReturnType<typeof addUserData>
  | ReturnType<typeof removeUserData>

type userDataState = {
  id: number;
  email: string;
  nickname: string;
}
const initialState: userDataState = {
  id: 0,
  email: "",
  nickname: "",
};
  // 리듀서

function userReducer(state: userDataState, action: userAction) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        nickname: action.payload.nickname,
      }
    case REMOVE_USER:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default userReducer;