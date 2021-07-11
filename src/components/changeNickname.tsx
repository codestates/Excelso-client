import axios from 'axios';
import React, { useState } from 'react';
import style from 'styled-components';


const ModalBody = style.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${props => (props.hidden ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  position: fixed;
`

const ModalOverlay = style.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`

const ModalContent = style.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  text-align: center;
  border-radius: 20px;
  height: 65vh;
  width: 30%;
  position: relative;
`

const ButtonBox = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ChangeButton = style.button`
  width: 80%;
`

const ContentBox = style.div`
  width:100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
`

const ContentName = style.div`
  
`

const ContentInput = style.input`
  
`

const ChangeNickname = ( { hidden, handleHidden, handleUserData }: any ) => {
  const [ newNickname, setNewNickname ] = useState(""); 
  
  const changeButtonClick = async () => {
    await axios.patch("http://localhost:3000/user/changenickname", {
      token: JSON.parse(sessionStorage.getItem("accessToken")!),
      changeNickname: newNickname,
    }).then(() => {
      handleUserData(newNickname);
      console.log('change success')
    })
    .catch(err => console.log(err))
    handleHidden(true); 
  }

  const handleInputValue = (e:any) => { //check
    setNewNickname(e.target.value)
  }

  const ButtonClick = () => {
    setNewNickname("")
    console.log(newNickname);
    handleHidden(true);
  }

   return (
    <>
    <ModalBody hidden={hidden} onClick={ButtonClick}>
    <ModalOverlay></ModalOverlay>
    <ModalContent onClick={(e) => e.stopPropagation()}>
        <ContentBox>
           <ContentName>닉네임</ContentName>
           <ContentInput type="text" value={newNickname} onChange={handleInputValue}></ContentInput>
        </ContentBox>
        <ButtonBox>
          <ChangeButton onClick={changeButtonClick}>닉네임 변경</ChangeButton>
        </ButtonBox>
    </ModalContent>
  </ModalBody>
  </>
  )
}

export default ChangeNickname;