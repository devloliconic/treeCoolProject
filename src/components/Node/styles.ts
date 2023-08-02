import styled from "styled-components";

export const Text = styled.p<{ $isSelected: boolean }>`
  font-size: 14px;
  color: ${({ $isSelected }) => ($isSelected ? "#ABEE87" : "#cdaa51")};

  cursor: pointer;

  transition: 0.1s all linear;

  &:hover {
    color: #c9dfbe;
  }
`;

export const ChildrenBox = styled.div`
  margin-left: 20px;
`;
