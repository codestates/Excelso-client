import { MpContainer, GlobalStyle, Navbar } from './style';
import MypageInfoCpn from '../components/mypageInfo';
import MypageReview from '../components/mypageReview';
import SignoutBar from '../components/signout'


const MypageContainer = ({userData, handleUserData}: any) => {
  return (
    <>
      <GlobalStyle />
      <MpContainer>
        <Navbar></Navbar>
        <MypageInfoCpn userData={userData} handleUserData={handleUserData}></MypageInfoCpn>
        <MypageReview></MypageReview>
        <SignoutBar></SignoutBar>
      </MpContainer>
    </>
  )
}

export default MypageContainer;