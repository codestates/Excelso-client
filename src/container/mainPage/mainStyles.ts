// import styled from "styled-components/macro";
import styled from "styled-components";
import Slider from "react-slick";

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
  background-color: black;
  overflow: hidden;
  .swiper-button-prev {
    color: pink;
  }
  .swiper-button-next {
    color: pink;
  }
  .swiper-pagination-bullet {
    background-color: pink;
  }
  .swiper-slide img {
    display: block;
    margin: 0 auto;
    height: 100%;
  }
`;

export const SndContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  width: 100%;
  height: 30%;
  background-color: pink;
  padding: 1.5rem;
`;

export const ExcelLogo = styled.div`
  opacity: 0.7;
  width: 10rem;
  padding: 0.5rem;
  margin-top: 2rem;
  background-color: black;
  border-radius: 1rem;

  color: white;
  font-size: 3rem;
  font-weight: 500;
`;

export const ExcelExp = styled.div`
  height: 5rem;
  padding: 0.5rem;
  margin-top: 1.7rem;

  p {
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
    word-spacing: 0.15rem;
  }
`;

export const MainSectionTwo = styled.section`
  width: 100%;
  height: 100vh;
  background-color: black;
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
  width: 100%;
  height: 100vh;
  padding: 2rem;
`;

export const MDWord = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  width: 15rem;
  padding: 0.5rem;
  margin: 4rem 2rem;
  background-color: black;
  border-radius: 1rem;

  color: white;
  font-size: 3rem;
  font-weight: 500;
`;

export const MDContainer = styled.div`
  display: block;
  width: 70rem;
  height: 42rem;
  padding-left: 3rem;
`;

export const ThdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65rem;
  height: 12rem;
  margin: 2rem;
`;

export const MDImg = styled.div`
  width: 16rem;
  height: 10rem;
  border: 1px solid;
  border-radius: 2rem;
  box-shadow: 0.623rem 0.313rem 0.313rem pink;
`;

export const MDExp = styled.div`
  width: 45rem;
  height: 10rem;
  border: 1px solid;
  border-radius: 2rem;
  box-shadow: 0.623rem 0.313rem 0.313rem pink;
`;

export const MainSectionFour = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: pink;
  padding: 2rem;
`;

export const SnsWord = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  width: 30rem;
  padding: 0.5rem;
  margin: 4rem 2rem 0;
  background-color: black;
  border-radius: 1rem;

  color: white;
  font-size: 3rem;
  font-weight: 500;
  button {
    background: transparent;
  }
`;

export const FthContainer = styled.div`
  height: 23rem;
  margin: 7rem;
  display: grid;
  grid-template-columns: 16rem 16rem 16rem 16rem 16rem;
  column-gap: 1rem;
`;

export const SnsContainer = styled.div`
  background: white;
  color: black;

  img {
    opacity: 0.7;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;
