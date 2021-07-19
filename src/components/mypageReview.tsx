// import {
//   MypageReviewBody,
//   ReviewContainer,
//   ReviewBox,
//   ReviewPicture,
//   ReviewFunc,
//   ReviewUpdate,
//   ReviewDelete,
//   ReviewModalBody,
//   ModalOverlay,
// } from "./style"
import styled from "styled-components";
import axios from "axios";
import { RootState } from "../reducers";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReivewAction } from "../reducers/reviewReducer";
import ReviewUpdateModal from "./reviewUpdateModal";

const ReviewModalBody = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${(props) => (props.hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
`;

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const MypageReviewBody = styled.div`
  height: 50vh;
  width: 90%;
  background-color: #262223;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const ReviewContainer = styled.div`
  height: 90%;
  width: 95%;
  background-color: #ddc6b6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
`;

const ReviewBox = styled.div`
  height: 80%;
  width: 30%;
  background-color: white;
  border-radius: 40px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const ReviewPicture = styled.img`
  height: 90%;
  border-radius: 80px;
`;

const ReviewFunc = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  margin-bottom: 4px;
`;

const ReviewUpdate = styled.button`
  width: 3rem;
  height: 1.3rem;
`;

const ReviewDelete = styled.button`
  margin-right: 24px;
  width: 3rem;
  height: 1.3rem;
`;
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

type userReviewT = {
  id: number;
  content: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  coffee_id: number;
  title: string;
  src: string;
  user_id: number;
};

interface userReviewI {
  payload: userReviewT[];
}

const MypageReview = ({
  reviewHidden,
  reviewHandleHidden,
  reviewModalClick,
}: any) => {
  const dispatch = useDispatch();

  const [updateHidden, setUpdateHidden] = useState(true);

  const [fakeCount, setFakeCount] = useState(0);

  const [personalData, setPersonalData] = useState({});

  const userData: userDataI = useSelector(
    (state: RootState) => state.loginReducer
  );

  const reviewData: userReviewI = useSelector(
    (state: RootState) => state.UserGetReviewReducer
  );

  console.log(personalData);
  useEffect(() => {
    if (fakeCount === 0) {
      return;
    }
    reviewHandleHidden(true);
    reviewModalClick();
    // console.log(reviewData.payload)
  }, [fakeCount]);
  //fakeCount로 모달에서 화면전환 없이 삭제하기

  const closeModal = () => {
    reviewHandleHidden(true);
    console.log(reviewData);
  };

  const deleteReview = async (data: number) => {
    await dispatch(deleteReivewAction(data, userData.accessToken));
    setFakeCount(fakeCount + 1); // useEffect 때문
  };

  const handleUpdateButton = (data: userReviewT) => {
    setPersonalData(data);
    setUpdateHidden(false);
  };

  const handleUpdateClose = () => {
    setUpdateHidden(true);
  };

  return (
    <>
      <ReviewModalBody hidden={reviewHidden} onClick={closeModal}>
        <ModalOverlay></ModalOverlay>
        <MypageReviewBody onClick={(e) => e.stopPropagation()}>
          <ReviewContainer>
            {reviewData.payload.map((el: userReviewT) => {
              return (
                <ReviewBox key={el.id}>
                  <ReviewPicture src={el.src} />
                  <ReviewFunc>
                    <ReviewUpdate onClick={() => handleUpdateButton(el)}>
                      수정
                    </ReviewUpdate>
                    <ReviewDelete onClick={() => deleteReview(el.coffee_id)}>
                      삭제
                    </ReviewDelete>
                  </ReviewFunc>
                </ReviewBox>
              );
            })}
          </ReviewContainer>
        </MypageReviewBody>
      </ReviewModalBody>
      <ReviewUpdateModal
        updateHidden={updateHidden}
        handleUpdateClose={handleUpdateClose}
        personalData={personalData}

      ></ReviewUpdateModal>
    </>
  );
};

export default MypageReview;

// {CommentList.data.data ? (CommentList.data.data.map((commentData,index)=> <CommentBox key={index} commentData={commentData} accessToken={accessToken}/>))
//  : <div className="nothing"/>}
