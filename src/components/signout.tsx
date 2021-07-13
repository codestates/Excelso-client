import { SignoutBarBody, SignoutBtn } from "./style"
import axios from "axios"

const SignoutBar = () => {
  
  const signout = async () => {
    await axios.post("http://localhost:3000/user/deleteuser", {
      token: JSON.parse(sessionStorage.getItem("accessToken")!),
    })
    .then(() => {
      window.location.replace("/");
    }).catch(err => alert(err))  
  }

  return (
    <SignoutBarBody>
      <SignoutBtn onClick={signout}>회원탈퇴</SignoutBtn>
    </SignoutBarBody>
  )
}

export default SignoutBar;