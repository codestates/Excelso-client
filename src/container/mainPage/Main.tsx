import React from "react";

import SwiperSlider from "../../components/slider/SwiperSlider";
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

const Main = () => {
  const videoSource = `https://vod-progressive.akamaized.net/exp=1626047862~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4722%2F5%2F148614389%2F452088434.mp4~hmac=576d1790672bfa6f6d64c3755e553ec1858791ee3830445ef4a0dd220898788e/vimeo-prod-skyfire-std-us/01/4722/5/148614389/452088434.mp4?download=1&filename=Coffee+Jet+-+1631.mp4`;

  const mdImg1 = `https://www.coffeebeankorea.com/data/menu/아이스바닐라라떼.jpg`;

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
              <div>
                저희 Excelso에서는 원하시는 브랜드 커피 음료를 추천받으실 수
                있습니다.
              </div>
              <div>
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
          <MDWord>MD's PICK</MDWord>
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
              <MDImg></MDImg>
            </ThdContainer>
            <ThdContainer>
              <MDImg></MDImg>
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
          <SnsWord>INSTAGRAM 보러가기</SnsWord>
          <SnsMinWord>INSTAGRAM</SnsMinWord>
          <FthContainer>
            <SnsContainer>
              <img src={img1} alt={"sns"} />
            </SnsContainer>
            <SnsContainer>
              <img src={img2} alt={"sns"} />
            </SnsContainer>
            <SnsContainer>
              <img src={img3} alt={"sns"} />
            </SnsContainer>
            <SnsContainer>
              <img src={img4} alt={"sns"} />
            </SnsContainer>
            <SnsContainer>
              <img src={img5} alt={"sns"} />
            </SnsContainer>
          </FthContainer>
        </MainSectionFour>
        <Footer />
      </MainContainer>
    </>
  );
};

export default Main;
