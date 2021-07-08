import React, { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { addReviewAction } from "../../reducers/reviewReducer";
import {
  ReviewModalConatiner,
  Modal,
  Header,
  Title,
  Middle,
  TextArea,
  AddButton,
} from "./styles";
interface ReviewModalProps {
  show: boolean;
  handleShow: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  path: number;
}

export default function ReviewModal({
  show,
  handleShow,
  path,
}: ReviewModalProps): JSX.Element {
  const [value, setValue] = useState("");
  const getValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const dispatch = useDispatch();
  const addReview = () => {
    console.log("리뷰등록시도");
    console.log("components", path, value);
    dispatch(addReviewAction(path, value, 3, "token"));
  };
  return (
    <ReviewModalConatiner show={show} onClick={handleShow}>
      <Modal>
        <Header>
          <Title>리뷰 등록하기</Title>
        </Header>
        <Middle>
          <TextArea value={value} onChange={getValue}></TextArea>
          <AddButton onClick={addReview}>등록하기</AddButton>
        </Middle>
      </Modal>
    </ReviewModalConatiner>
  );
}
