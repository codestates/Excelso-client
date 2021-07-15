import React from "react";
import styled from "styled-components/macro";
interface ToggleconatinerI {
  bookmark: boolean;
}

const Toggleconatiner = styled.div<ToggleconatinerI>`
  width: 80px;
  height: 40px;
  padding: 5px;
  border-radius: 20px;
  margin: 5px 5px;

  background-color: ${(props) => (props.bookmark ? "green" : "black")};
`;

const ToggleItem = styled.div<any>`
  width: 27px;
  height: 30px;
  border-radius: 50%;
  background-color: white;

  transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1);

  transform: ${(props) =>
    props.bookmark ? "translateX(0%)" : "translateX(160%)"};
`;

export default function Toggle({
  bookmark,
  onToggle,
}: {
  bookmark: boolean;
  onToggle: () => void;
}): JSX.Element {
  return (
    <Toggleconatiner bookmark={bookmark}>
      <ToggleItem bookmark={bookmark} onClick={onToggle}></ToggleItem>
    </Toggleconatiner>
  );
}
