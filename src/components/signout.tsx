import { SignoutBarBody, SignoutBtn } from "./style"
import axios from "axios"
require("dotenv").config();
const url = process.env.REACT_APP_API_ROOT;

const SignoutBar = () => {
  
  const signout = async () => {
    await axios.post(`${url}/user/deleteuser`, {
      token: JSON.parse(sessionStorage.getItem("accessToken")!),
    })
    .then(() => {
      window.location.replace("/");
      sessionStorage.clear();
      alert("회원탈퇴 되었습니다.");
    }).catch(err => alert(err))  
  }

  return (
    <SignoutBarBody>
      <SignoutBtn onClick={signout}>회원탈퇴</SignoutBtn>
    </SignoutBarBody>
  )
}

export default SignoutBar;