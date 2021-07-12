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
  background-color: #ddc6b6;
  padding: 1.5rem;
`;

export const ExcelLogo = styled.div`
  opacity: 0.7;
  width: 12.5rem;
  padding: 0.5rem;
  margin-top: 2rem;
  background-color: #262223;
  border-radius: 1rem;

  color: #ddc6b6;
  font-size: 3rem;
  font-weight: 500;
`;

export const ExcelExp = styled.div`
  height: 5rem;
  padding: 0.5rem;
  margin-top: 1.7rem;

  div {
    color: #262223;
    font-size: 1.5rem;
    font-weight: 700;
    word-spacing: 0.15rem;
    .mention2 {
      @media screen and (max-width: 500px) {
        color: #262223;
        font-size: 0.7rem;
        font-weight: 700;
        word-spacing: 0.15rem;
      }
    }
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
  width: 17rem;
  padding: 0.5rem;
  margin: 4rem 2rem;
  background-color: #262223;
  border-radius: 1rem;

  color: #ddc6b6;
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
  margin-top: 2rem;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ThdTempContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  height: 12rem;
  margin: 1.7rem;
  margin-top: 3rem;
  margin-right: 4rem;
  border-radius: 1rem;
  background-color: #ddc6b6;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    p {
      color: #262223;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const MDImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 11.5rem;
  border: 1px solid;
  border-radius: 2rem;
  box-shadow: 0.623rem 0.313rem 0.313rem #ddc6b6;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 70%;
    height: 100%;
  }
`;

export const MDExp = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 1.5rem;
  width: 45rem;
  height: 11.5rem;
  border: 1px solid;
  border-radius: 2rem;
  box-shadow: 0.623rem 0.313rem 0.313rem #ddc6b6;
`;

export const MainSectionFour = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ddc6b6;
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
  width: 35rem;
  padding: 0.5rem;
  margin: 4rem 2rem 0;
  background-color: #262223;
  border-radius: 1rem;

  color: white;
  font-size: 3rem;
  font-weight: 500;
  button {
    background: transparent;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const SnsMinWord = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  width: 20rem;
  padding: 0.5rem;
  margin: 4rem 2rem 0;
  background-color: #262223;
  border-radius: 1rem;

  color: white;
  font-size: 3rem;
  font-weight: 500;
  button {
    background: transparent;
  }
  @media screen and (min-width: 600px) {
    display: none;
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
  color: #262223;

  img {
    opacity: 0.7;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
