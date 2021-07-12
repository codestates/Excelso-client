import { MpContainer, GlobalStyle } from "./style";
import MypageInfoCpn from "../components/mypageInfo";
import MypageReview from "../components/mypageReview";
import SignoutBar from "../components/signout";
import Nav from "../components/nav/Nav";


const MypageContainer = () => {
  return (
    <>
      <GlobalStyle />
      <MpContainer>
        <Nav />
        <MypageInfoCpn></MypageInfoCpn>
        <MypageReview></MypageReview>
        <SignoutBar></SignoutBar>
      </MpContainer>
    </>
  );
};

export default MypageContainer;
