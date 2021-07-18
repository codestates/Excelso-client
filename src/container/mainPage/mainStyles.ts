import styled from "styled-components/macro";

export const MainContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  word-break: keep-all;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const MainSectionOne = styled.section`
  width: 100vw;
  height: 100vh;
`;

export const FstContainer = styled.div`
  width: 100%;
  height: 70%;
  background-color: #262223;
  overflow: hidden;
  .swiper-button-prev {
    color: #ddc6b6;
  }
  .swiper-button-next {
    color: #ddc6b6;
  }
  .swiper-pagination-bullet {
    background-color: #ddc6b6;
  }
  .swiper-slide {
    width: auto;
  }
  .swiper-slide img {
    display: block;
    margin: 0 auto;
    height: 100%;
    width: 75%;
  }
`;

export const SndContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  width: 100%;
  height: 30%;
  background-color: #ddc6b6;
  padding: 1.5vw;
  overflow: hidden;
`;

export const ExcelLogo = styled.div`
  opacity: 0.7;
  width: 12vw;
  height: auto;
  padding: 0.5vw;
  margin-top: 2vh;
  margin: 0 auto;
  background-color: #262223;
  border-radius: 1vw;
  overflow: hidden;

  color: #ddc6b6;
  font-size: 3vw;
  font-weight: 500;
  text-align: center;
`;

export const ExcelExp = styled.div`
  display: flex;
  display: block;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 20vh;
  padding: 0.5vw;
  margin-top: 1.7vw;
  text-align: center;

  div.mention1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 3vh;
    color: #262223;
    font-size: 2vw;
    font-weight: 700;
  }

  div.mention2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 3vh;
    color: #262223;
    font-size: 1vw;
    font-weight: 700;
    overflow: hidden;

    margin-top: 1vh;
  }
`;

export const MainSectionTwo = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #262223;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Video = styled.video`
  margin: auto;
  display: block;
  width: 100vw;
  height: 100vh;
`;

export const MainSectionThree = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  width: 100%;
  height: 100vh;
  padding: 2vw;
`;

export const MDWord = styled.div`
  left: 0;
  top: 0;
  opacity: 0.7;
  width: 17vw;
  height: auto;
  padding: 0.5vw;
  margin: 0 auto;
  background-color: #262223;
  border-radius: 1vw;

  color: #ddc6b6;
  font-size: 3vw;
  font-weight: 500;
  text-align: center;
`;

export const MDContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  width: 95vw;
  height: 70vh;
  margin: 0 auto;
  margin-top: 5vw;
  padding: 2vw;
`;

export const ThdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65vw;
  height: 20vh;
  margin: 3vw;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ThdTempContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65vw;
  height: 20vh;
  margin: 5vw auto;
  border-radius: 1vw;
  background-color: #ddc6b6;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vw;
    margin: 3vw;
    p {
      color: #262223;
      font-size: 2vw;
      font-weight: 700;
    }
  }

  @media screen and (min-width: 550px) {
    display: none;
  }
`;

export const MDImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 18vh;
  border: 0.05vw solid;
  border-radius: 2vw;
  box-shadow: 0.623vw 0.313vw 0.313vw #ddc6b6;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      height: 100%;
    }
  }
`;

export const MDExp = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2vw;
  width: 48vw;
  height: 18vh;
  border: 0.05vw solid;
  border-radius: 2vw;
  box-shadow: 0.623vw 0.313vw 0.313vw #ddc6b6;
  div {
    font-size: 1.5vw;
  }
`;

export const MainSectionFour = styled.div`
  display: flex;
  display: block;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ddc6b6;
  padding: 2vw;

  section#mainSns {
    margin: 0 auto;
  }
`;

export const SnsWord = styled.div`
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  width: 35vw;
  height: auto;
  padding: 0.5vw;
  margin: 0 auto;
  background-color: #262223;
  border-radius: 1vw;

  a {
    text-decoration: none;
    color: #ddc6b6;
    font-size: 3vw;
    font-weight: 500;
    text-align: center;
  }
  a:hover {
    cursor: pointer;
  }
`;

export const FthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  margin: 5vw;
  margin: 0 atuo;
  overflow: hidden;
  .swiper-container {
    width: 100%;
  }
  .swiper-slide {
    width: auto;
  }
  .swiper-slide img {
    height: 100%;
  }
`;
