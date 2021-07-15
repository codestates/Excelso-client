import React, { useState } from "react";
import style from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { postUser } from "../reducers/loginReducer";
import axios from "axios";

const ModalBody = style.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${(props) => (props.hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index:100;
`;

const ModalOverlay = style.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ModalContent = style.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: #262223;
  text-align: center;
  border-radius: 20px;
  height: 50vh;
  width: 55%;
  position: relative;
  color: #DDC6B6;
`

const LoginTitle = style.div`
  font-size: 1.8rem;
  margin-top: 18px;
  text-align: left;
  margin-left: 36px;
`

const ButtonBox = style.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 68px;
`

const LoginButton = style.button`
    background-color: #fff;
    color: #262223;
    border: none;
    border-radius: 5px;
    width: 10%;
    height: 5vh;
`

const SocialLoginButton = style.button`
    background-color: #fff;
    color: #262223;
    border: none;
    border-radius: 5px;
    width: 10%;
    height: 5vh;
    margin-left: 16px;
    margin-right: 16px;
`

const ContentBox = style.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
`;

const ContentName = style.div`
  padding: 4px 16px;
  width: 30%;
`

const ContentInput = style.textarea`
  height: 20vh;
  width: 55%;
  resize: none;
  padding: 12px 8px;
  
`

//type


const ReviewUpdateModal = ({ updateHidden, handleUpdateClose, personalData }: any) => {
  const { content, rating, updatedAt, coffee_id, title } = personalData;
  // console.log(content);
//   const coffeeData = await axios.get("http://localhost:3000/coffee/coffeeinfo")
//   .then(res => {
//     return res.data
//   })
  
  const updateReview = async () => {
    await axios.post("http://localhost:3000/review/update", {
      user_id: "",
      coffee_id,
      content,
      rating,
    })
  }
  const [ inputValue, setInputValue ] = useState(content);

  const changeInputValue = (e: any): void => {
    setInputValue(e.target.value);
  }
  return (
    <>
    <ModalBody hidden={updateHidden} onClick={handleUpdateClose}>
      <ModalOverlay></ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
          <LoginTitle>내가 작성한 리뷰</LoginTitle>
          <ContentBox>
            <ContentName>{title}</ContentName>
            <ContentInput
              value={inputValue}
              onChange={changeInputValue} // 작성중
            ></ContentInput>
          </ContentBox>
          <ButtonBox>
            <LoginButton onClick={updateReview}>등록</LoginButton>
            <SocialLoginButton onClick={handleUpdateClose}>취소</SocialLoginButton>
          </ButtonBox>
        </ModalContent>
      </ModalBody>
    </>
  );
};

export default ReviewUpdateModal;


// id: number;
// content: string;
// rating: number;
// createdAt: string;
// updatedAt: string;
// coffee_id: number;
// src: string;