import { SignoutBarBody, SignoutBtn } from "./style"
import axios from "axios"

const SignoutBar = () => {
  
  const signout = async () => {
    await axios.post("http://localhost:3000/user/deleteuser", {
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