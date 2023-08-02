import { CloseOutlined } from "@ant-design/icons";
import React, { MouseEvent } from "react";

import { Portal } from "@/components";

import { Content, Modal, ModalHeader, Title } from "./styles";

interface Props {
  onModalClose: () => void;
  isOpen: boolean;
  children?: React.ReactNode;
  title: string;
}

export const BaseModal = ({ onModalClose, isOpen, children, title }: Props) => {
  const handleModalClose = (e: MouseEvent) => {
    onModalClose();
    e.stopPropagation();
  };

  return (
    <Portal>
      <Modal $isOpen={isOpen}>
        <Content>
          <ModalHeader>
            <Title>{title}</Title>
            <CloseOutlined onClick={handleModalClose} />
          </ModalHeader>
          {children}
        </Content>
      </Modal>
    </Portal>
  );
};
