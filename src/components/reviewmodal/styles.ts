import styled from "styled-components/macro";
interface Props {
  show: boolean;
}

export const ReviewModalConatiner = styled.div<Props>`
  width: 100%;
  height: 100vh;
  /* position: fixed; */
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.show ? "flex" : "none")};
`;

export const Modal = styled.div`
  background: white;
  width: 600px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Header = styled.div`
  width: 80%;
`;

export const Title = styled.h1``;

export const Middle = styled.div`
  height: 50%;
  margin-left: 10px;
`;

export const AddButton = styled.button<ButtonProps>`
  vertical-align: top;
  outline: none;
  border-radius: 7px;
  cursor: pointer;
  padding: 10px;
  margin-left: 10px;
`;

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
interface TextI {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea = styled.textarea<TextI>`
  width: 80%;
  height: 100%;
  padding: 3px;
  outline: none;
  border: 2px solid pink;
  border-radius: 7px;
`;

// .attrs((props) => ({
//   type: "text",
// }))`
