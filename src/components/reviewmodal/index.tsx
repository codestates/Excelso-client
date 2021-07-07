import React from "react";
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
}

export default function ReviewModal({
  show,
  handleShow,
}: ReviewModalProps): JSX.Element {
  return (
    <ReviewModalConatiner show={show} onClick={handleShow}>
      <Modal>
        <Header>
          <Title>리뷰 등록하기</Title>
        </Header>
        <Middle>
          <TextArea></TextArea>
          <AddButton>등록하기</AddButton>
        </Middle>
      </Modal>
    </ReviewModalConatiner>
  );
}
