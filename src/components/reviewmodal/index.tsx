import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReviewAction } from "../../reducers/reviewReducer";
import { RootState } from "../../reducers";
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
interface userDataI {
  success: boolean;
  token: string;
  info: {
    id: number;
    email: string;
    nickname: string;
  };
  message: string;
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

  const userData: userDataI = useSelector(
    (state: RootState) => state.loginReducer
  );

  const addReview = () => {
    console.log("addReview 눌렀습니다.");
    console.log(userData);
    dispatch(addReviewAction(path, value, 5, userData.token));
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
