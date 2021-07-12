import { MpContainer, GlobalStyle,  } from './style';
import MypageInfoCpn from '../components/mypageInfo';
import MypageReview from '../components/mypageReview';
import SignoutBar from '../components/signout';
import Nav from '../components/nav/Nav';


const MypageContainer = ({userData, handleUserData}: any) => {
  return (
    <>
      <GlobalStyle />
      <MpContainer>
        <Nav></Nav>
        <MypageInfoCpn userData={userData} handleUserData={handleUserData}></MypageInfoCpn>
        <MypageReview></MypageReview>
        <SignoutBar></SignoutBar>
      </MpContainer>
    </>
  )
}

export default MypageContainer;