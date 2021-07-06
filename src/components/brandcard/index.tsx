import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
// import {
//   BrandCardContainer,
//   BrandCardInner,
//   Image,
//   Title,
//   Desc,
// } from "./styles";
interface SimpleImageSliderProps {
  width: number;
  height: number;
  images: [];
  showNavs: boolean;
  showBullets: boolean;
}

const images: { url: string }[] = [
  {
    url: "http://paikdabang.com/wp-content/themes/paikdabang/assets/images/ceo.jpg",
  },
  { url: "http://www.slist.kr/news/photo/202011/198169_338203_5518.jpg" },
  {
    url: "https://yt3.ggpht.com/Uqhf9MBF3oGaRUKoQS3V3aBXS-jRfWrpUBeE7gJZsUBQ7GtrF-iuS1jBQXVn061-CTuddvjiT7c=s900-c-k-c0x00ffffff-no-rj",
  },
  { url: "https://t1.daumcdn.net/cfile/tistory/9989D4425B1E3C9501" },
  {
    url: "https://mblogthumb-phinf.pstatic.net/20160606_265/ppanppane_14652091945895rhj8_PNG/%C4%BF%C7%C7%BA%F3%B7%CE%B0%ED_%282%29.png?type=w800",
  },
  {
    url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile9.uf.tistory.com%2Fimage%2F9951424F5E738F43302C78",
  },
];

export default function BrandCard(): JSX.Element {
  return (
    <>
      {images.map((image, idx) => {
        return (
          <div style={{}}>
            <img
              key={idx}
              src={image.url}
              alt={"카페 브랜드"}
              style={{ objectFit: "contain" }}
            />
          </div>
        );
      })}
    </>
  );
}

// <BrandCardContainer>
//   <BrandCardInner>
//     <Title>빽다방</Title>
//     <Image
//       src={
//         "http://paikdabang.com/wp-content/themes/paikdabang/assets/images/ceo.jpg"
//       }
//     />
//     <Desc>
//       브라질 원두 고유의 묵직한 바디감이잘 표현되어 있으며, 아몬드의
//       고소함과밀크초콜릿 같은 은은한 단맛이 균형을 이루는매력적인
//       블렌딩입니다.커피를 머금었을 때 입안을 감싸는 실키함이편안한 에프터를
//       선사합니다.
//     </Desc>
//   </BrandCardInner>
// </BrandCardContainer>
