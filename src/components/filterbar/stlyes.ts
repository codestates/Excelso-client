import styled from "styled-components/macro";

interface OptionI {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Container = styled.div`
  height: 80px;
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Brand = styled.div<OptionI>`
  margin-left: 10px;
`;
