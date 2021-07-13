import { MpContainer, GlobalStyle } from "./style";
import MypageInfoCpn from "../components/mypageInfo";
import SignoutBar from "../components/signout";
import Nav from "../components/nav/Nav";


const MypageContainer = () => {
  return (
    <>
      <GlobalStyle />
      <MpContainer>
        <Nav />
        <MypageInfoCpn></MypageInfoCpn>
        <SignoutBar></SignoutBar>
      </MpContainer>
    </>
  );
};

export default MypageContainer;
