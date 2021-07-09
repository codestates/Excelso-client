import React from "react";
import { reviewT } from "../../reducers/reviewReducer";
import {
  ReviewContainer,
  Writer,
  Text,
  Rating,
  CreatedAt,
  Review,
  AddReview,
} from "./styles";
interface Props {
  reviews: reviewT[];
  handleShow: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function Reviews({ reviews, handleShow }: Props): JSX.Element {
  return (
    <>
      <ReviewContainer>
        <div style={{ height: "90%" }}>
          {reviews &&
            reviews.map((review) => {
              return "id" in review ? (
                <Review key={review.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "0 10px",
                    }}
                  >
                    <Writer>{`${review.nickname}(${review.email.slice(
                      0,
                      4
                    )}*****)`}</Writer>
                    <Rating>{review.rating}</Rating>
                  </div>
                  <Text>{review.content}</Text>
                  <CreatedAt>{`${review.createdAt.slice(
                    0,
                    10
                  )} ${review.createdAt.slice(11, 16)}`}</CreatedAt>
                </Review>
              ) : (
                <div>작성된 리뷰가 없습니다</div>
              );
            })}
        </div>
        <AddReview onClick={handleShow}>리뷰 등록</AddReview>
      </ReviewContainer>
    </>
  );
}
