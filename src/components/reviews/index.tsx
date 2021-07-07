import React from "react";
import { reviewI } from "../../reducers/reviewReducer";
import ReviewModal from "../reviewmodal";
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
  review: reviewI | {};
  handleShow: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function Reviews({ review, handleShow }: Props): JSX.Element {
  return (
    <>
      <ReviewContainer>
        <div style={{ height: "90%" }}>
          {"id" in review ? (
            <Review>
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
          )}
        </div>
        <AddReview onClick={handleShow}>리뷰 등록</AddReview>
      </ReviewContainer>
    </>
  );
}
