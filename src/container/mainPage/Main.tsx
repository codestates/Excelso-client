import React from "react";
import SwiperSlider from "../../components/slider/SwiperSlider";
import Sns from "../../components/sns/Sns";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import GoToTop from "../../components/gototop/GoToTop";
import {
  MainContainer,
  MainSectionOne,
  ExcelLogo,
  ExcelExp,
  FstContainer,
  SndContainer,
  MainSectionTwo,
  VideoContainer,
  Video,
  MainSectionThree,
  MDContainer,
  ThdContainer,
  ThdTempContainer,
  MDWord,
  MDImg,
  MDExp,
  MainSectionFour,
  FthContainer,
  SnsWord,
  SnsMinWord,
  SnsContainer
} from "./mainStyles";

import img1 from "../../img/cake-1589012_1280.jpg";
import img2 from "../../img/coffee-3759005_1920.jpg";
import img3 from "../../img/coffee-4597416_1920.jpg";
import img4 from "../../img/restaurant-4011989_1920.jpg";
import img5 from "../../img/table-2600954_1920.jpg";

// import VideoSrc from "../videos/200223_Cafe_01_13.mp4";

const Main = () => {
  const videoSource = `https://content.videvo.net/videvo_files/video/free/2020-03/originalContent/200223_Cafe_01_13.mp4`;

  const mdImg1 = `http://paikdabang.com/wp-content/uploads/2018/05/콜드브루-1-450x588.png`; // 콜드브루
  const mdImg2 = `https://coffeebay.com/upload/menu/file_20200827174728.png`; // 크림소다 펄에이드
  const mdImg3 = `https://image.dalkomm.com/data/KOMM/uploads/renew/bfi_thumb/20200319173058_app_thumb_c_mocalatte-3dhl66igs7gqly8ql1i58q.png`;

  return (
    <>
      <Nav />
      <MainContainer>
        <GoToTop />
        <MainSectionOne>
          <FstContainer>
            <SwiperSlider />
          </FstContainer>
          <SndContainer>
            <ExcelLogo>Excelso</ExcelLogo>
            <ExcelExp>
              <div className="mention1">
                저희 Excelso에서는 원하시는 브랜드 커피 음료를 추천받으실 수
                있습니다.
              </div>
              <div className="mention2">
                원하시는 제품에 대한 영양정보 및 다른 고객님들의 제품 리뷰 등
                다양한 정보를 얻으실 수 있습니다.
              </div>
            </ExcelExp>
          </SndContainer>
        </MainSectionOne>
        <MainSectionTwo>
          <VideoContainer>
            <Video autoPlay muted loop>
              <source src={videoSource} type="video/mp4" />
            </Video>
          </VideoContainer>
        </MainSectionTwo>
        <MainSectionThree>
          <div className="mdPick">
            <MDWord>MD's PICK</MDWord>
          </div>
          <MDContainer>
            <ThdContainer>
              <MDImg>
                <div>
                  <img src={mdImg1} alt="" />
                </div>
              </MDImg>
              <MDExp>
                <div>
                  <p>요즘 같은 더운 날씨에 강력추천합니다.</p>
                </div>
              </MDExp>
            </ThdContainer>
            <ThdContainer>
              <MDExp>
                <div>
                  <p>
                    찝찝한 하루, 더 상쾌해지길 원하세요?
                    <br />
                    시원한 하루를 즐기기 위해선 이 음료를 추천합니다!
                  </p>
                </div>
              </MDExp>
              <MDImg>
                <div>
                  <img src={mdImg2} alt="" />
                </div>
              </MDImg>
            </ThdContainer>
            <ThdContainer>
              <MDImg>
                <div>
                  <img src={mdImg3} alt="" />
                </div>
              </MDImg>
              <MDExp>
                <div>
                  <p>제 최애커피입니다.</p>
                </div>
              </MDExp>
            </ThdContainer>
            <ThdTempContainer>
              <div>
                <p>요즘 같은 더운 날씨에 강력추천합니다.</p>
              </div>
            </ThdTempContainer>
            <ThdTempContainer>
              <div>
                <p>
                  찝찝한 하루, 더 상쾌해지길 원하세요? 시원한 하루를 즐기기
                  위해선 이 음료를 추천합니다!
                </p>
              </div>
            </ThdTempContainer>
            <ThdTempContainer>
              <div>
                <p>제 최애커피입니다.</p>
              </div>
            </ThdTempContainer>
          </MDContainer>
        </MainSectionThree>
        <MainSectionFour>
          <div className="instagram">
            <SnsWord>INSTAGRAM 보러가기</SnsWord>
            <SnsMinWord>INSTAGRAM</SnsMinWord>
          </div>

          <FthContainer>
            <Sns />
          </FthContainer>
        </MainSectionFour>
        <Footer />
      </MainContainer>
    </>
  );
};

export default Main;
