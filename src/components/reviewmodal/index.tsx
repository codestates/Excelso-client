import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReviewAction,
  getReviewAction,
  deleteReivewAction,
  reviewT,
} from "../../reducers/reviewReducer";
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
  reviews: reviewT[];
}
interface userDataI {
  success: boolean;
  accessToken: string;
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
  reviews,
}: ReviewModalProps): JSX.Element {
  const userData: userDataI = useSelector(
    (state: RootState) => state.loginReducer
  );

  const myReview =
    userData.success &&
    reviews.filter((review) => review.user_id === userData.info.id)[0];
  console.log(myReview);

  const [value, setValue] = useState<string>(
    (myReview && myReview.content) || ""
  );
  const getValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const dispatch = useDispatch();

  const deleteReview = async (e: any) => {
    console.log("deleteReview 눌렀습니다");
    myReview &&
      (await dispatch(
        deleteReivewAction(myReview.coffee_id, userData.accessToken)
      ));
    await dispatch(getReviewAction(path));
    handleShow(e);
    setValue("");
  };

  const addReview = async (e: any) => {
    console.log("addReview 눌렀습니다.");
    if (value) {
      await dispatch(addReviewAction(path, value, 5, userData.accessToken));
      await dispatch(getReviewAction(path));
      handleShow(e);
    } else if (myReview && myReview.content === value) {
      alert("변경사항이 없다.");
    } else {
      alert("리뷰를 작성해주세요");
    }
  };

  return (
    <ReviewModalConatiner show={show} onClick={handleShow}>
      <Modal>
        <Header>
          <Title>리뷰 등록하기</Title>
        </Header>
        {myReview ? (
          <Middle>
            <TextArea value={value} onChange={getValue}></TextArea>
            <AddButton onClick={addReview}>수정하기</AddButton>
            <AddButton onClick={deleteReview}>삭제하기</AddButton>
          </Middle>
        ) : (
          <Middle>
            <TextArea value={value} onChange={getValue}></TextArea>
            <AddButton onClick={addReview}>수정하기</AddButton>
          </Middle>
        )}
      </Modal>
    </ReviewModalConatiner>
  );
}
