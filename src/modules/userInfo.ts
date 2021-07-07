
// 액션 타입 선언
const ADD_USER = 'userInfo/ADD_USER' as const;
// const 
let nextId = 1;

interface User {
  email: string;
  nickname: string;
  password: string;
}
// 액션 생성 함수

export const addUser = ( data: User ) => ({
  type: ADD_USER,
  payload: {
    id: nextId++,
    data: {
      email,
      nickname,
      password,
    }
  }
})