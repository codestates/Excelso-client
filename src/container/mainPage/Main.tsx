import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

// import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
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
  MDWord,
  MDImg,
  MDExp,
  MainSectionFour,
  FthContainer,
  SnsWord,
  SnsContainer
} from "./mainStyles";

const Main = ({ match }: RouteComponentProps) => {
  const videoSource =
    "https://vod-progressive.akamaized.net/exp=1625449939~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4924%2F17%2F449623829%2F1976335115.mp4~hmac=13c3fb89cf434e015efedb2efc6c19ae8ce562f425750a11e9f637d4643f24de/vimeo-prod-skyfire-std-us/01/4924/17/449623829/1976335115.mp4?download=1&filename=Coffee+-+46989.mp4";
  const videoSource2 =
    "https://vod-progressive.akamaized.net/exp=1625549723~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2221%2F14%2F361107726%2F1481313478.mp4~hmac=d9bc34aa76f0ed11db6ae85ace702c14a3fd1eca475c8d97bf611c2c54c7af8e/vimeo-prod-skyfire-std-us/01/2221/14/361107726/1481313478.mp4?download=1&filename=Coffee+-+26846.mp4";
  const img1 =
    "https://pixabay.com/get/g3aa8d0ed867beaffc0b60a5128731fd7423854c139500cdec8fdabd72a6139ad8826239ed412f5ec2ee84fb94e428255_1280.jpg?attachment=";
  const img2 =
    "https://pixabay.com/get/g2ccc8c48f99224b5de2482bd17c953e2cd639a6fba7fac27f99319f9737f0199730c563f15049418055fc57c4e6553b9_1920.jpg?attachment=";
  const img3 =
    "https://pixabay.com/get/g32c3311b379b8df0bb01c4fa7a4ebd6d43aa3f41b01a0c86a17256e7a270e7fcee538f9e750b9e1f17c2b65cf20b4ce5_1920.jpg?attachment=";
  const img4 =
    "https://pixabay.com/get/g21b390a1aff341dcbd8b34f91b654784e45188280b13eab9213c80ade1719d1f743e42f744cfff7f96d1709f1c86d92d_1920.jpg?attachment=";
  const img5 =
    "https://pixabay.com/get/g0bec103ac7e2ec8d4bd614bf1b713be32104d80941af205d366cbe58e022b729657be4755b6d66ce8855dea5914df37f_1920.jpg?attachment=";

  return (
    <>
      {/* <Nav /> */}
      <MainContainer>
        <MainSectionOne>
          <FstContainer></FstContainer>
          <SndContainer>
            <ExcelLogo>Excelso</ExcelLogo>
            <ExcelExp>
              <p>
                저희 Excelso에서는 원하시는 브랜드 커피 음료를 추천받으실 수
                있습니다.
                <br />
                원하시는 제품에 대한 영양정보 및 다른 고객님들의 제품 리뷰 등
                다양한 정보를 얻으실 수 있습니다.
              </p>
            </ExcelExp>
          </SndContainer>
        </MainSectionOne>
        <MainSectionTwo>
          <VideoContainer>
            <Video autoPlay muted loop>
              <source src={videoSource2} type="video/mp4" />
            </Video>
          </VideoContainer>
        </MainSectionTwo>
        <MainSectionThree>
          <MDWord>MD's PICK</MDWord>
          <MDContainer>
            <ThdContainer>
              <MDImg></MDImg>
              <MDExp></MDExp>
            </ThdContainer>
            <ThdContainer>
              <MDExp></MDExp>
              <MDImg></MDImg>
            </ThdContainer>
            <ThdContainer>
              <MDImg></MDImg>
              <MDExp></MDExp>
            </ThdContainer>
          </MDContainer>
        </MainSectionThree>
        <MainSectionFour>
          <SnsWord>INSTAGRAM 보러가기</SnsWord>
          <FthContainer>
            <SnsContainer>
              <img src={img1} />
            </SnsContainer>
            <SnsContainer>
              <img src={img2} />
            </SnsContainer>
            <SnsContainer>
              <img src={img3} />
            </SnsContainer>
            <SnsContainer>
              <img src={img4} />
            </SnsContainer>
            <SnsContainer>
              <img src={img5} />
            </SnsContainer>
          </FthContainer>
        </MainSectionFour>
        <Footer />
      </MainContainer>
    </>
  );
};

export default Main;
