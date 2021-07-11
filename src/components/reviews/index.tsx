import React from "react";
import { useSelector } from "react-redux";
import { reviewT } from "../../reducers/reviewReducer";
import { successPayloadTypeI } from "../../reducers/loginReducer";
import { RootState } from "../../reducers";
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
  handleShow: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  path: number;
  reviews: reviewT[];
}

export default function Reviews({
  handleShow,
  path,
  reviews,
}: Props): JSX.Element {
  const userData: successPayloadTypeI = useSelector(
    (state: RootState) => state.loginReducer
  );
  const myReview =
    Array.isArray(reviews) && userData.success
      ? reviews.filter((review) => review.user_id === userData.info.id)[0]
      : [];
  return (
    <>
      <ReviewContainer>
        <div style={{ height: "90%" }}>
          {Array.isArray(reviews) ? (
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
            })
          ) : (
            <div>작성된 리뷰가 없습니다1</div>
          )}
        </div>
        {myReview ? (
          <AddReview onClick={handleShow}>리뷰 수정</AddReview>
        ) : (
          <AddReview onClick={handleShow}>리뷰 등록</AddReview>
        )}
      </ReviewContainer>
    </>
  );
}
