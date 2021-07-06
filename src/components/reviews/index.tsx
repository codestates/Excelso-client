import React from "react";
import {
  ReviewsContainer,
  Pane,
  Writer,
  Text,
  Rating,
  CreatedAt,
} from "./styles";

export default function Reviews({ review }: any): JSX.Element {
  return (
    <ReviewsContainer>
      {review.id ? (
        <Pane>
          <Writer>{review.nickname}</Writer>
          <Text>{review.content}</Text>
          <Rating>{review.rating}</Rating>
          <CreatedAt>{review.createdAt}</CreatedAt>
        </Pane>
      ) : (
        <div>No review</div>
      )}
    </ReviewsContainer>
  );
}
