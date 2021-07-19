import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import axios from "axios";


const BookmarkModalBody = styled.div`
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

const BookmarkBody = styled.div`
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

const BookmarkContainer = styled.div`
  height: 90%;
  width: 95%;
  background-color: #ddc6b6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
`;

const BookmarkBox = styled.div`
  height: 80%;
  width: 30%;
  background-color: white;
  border-radius: 40px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const BookmarkPicture = styled.img`
  height: 90%;
  border-radius: 80px;
`;

const BookmarkFunc = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  margin-bottom: 4px;
`;

const BookmarkTitle = styled.div`
  margin-right: 16px;
`

const BookmarkUpdate = styled.button`
  margin-right: 32px;
  width: 3rem;
  height: 1.3rem;
`;

const BookmarkModal = ({
    bookmarkData, bookHidden, handleCloseBookModal
  }: any) => {
    console.log(bookmarkData);
   
    const closeModal = () => {
      handleCloseBookModal(true)
    }

    const moveCoffeeInfo = (data: number) => {
        window.location.replace(`/coffee/${data}`);
    }
  
    return (
      <>
        <BookmarkModalBody hidden={bookHidden} onClick={closeModal}>
          <ModalOverlay></ModalOverlay>
          <BookmarkBody onClick={(e) => e.stopPropagation()}>
            <BookmarkContainer>
              {bookmarkData.map((el: any) => {
                return (
                  <BookmarkBox key={el.id}>
                    <BookmarkPicture src={el.src} />
                    <BookmarkFunc>
                      <BookmarkTitle>{el.title}</BookmarkTitle>
                      <BookmarkUpdate onClick={() => moveCoffeeInfo(el.coffee_id)}>
                        Move
                      </BookmarkUpdate>
                    </BookmarkFunc>
                  </BookmarkBox>
                );
              })}
            </BookmarkContainer>
          </BookmarkBody>
        </BookmarkModalBody>
    </>
  );
};

export default BookmarkModal;