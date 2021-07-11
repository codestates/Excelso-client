import MypageContainer from "../container/mypage";
import { successPayloadType } from "../reducers/loginReducer";

// type userdata = {
//   id: number,
//   email: string,
//   nickname: string,
// }


const Mypage = ({userData, handleUserData}: any) => {
  return (
    <MypageContainer userData={userData} handleUserData={handleUserData}></MypageContainer>
  )
}

export default Mypage;