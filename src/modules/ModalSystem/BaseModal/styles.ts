import styled from "styled-components";

export const Modal = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.45);
`;

export const Content = styled.div`
  padding: 20px;
  width: 450px;
  background: #fff;
  border-radius: 12px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0;
  margin-bottom: 20px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h4`
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
`;
