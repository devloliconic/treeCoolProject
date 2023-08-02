import React from "react";

import { BaseButton } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children, onClick, ...props }) => {
  return (
    <BaseButton {...props} onClick={onClick}>
      {children}
    </BaseButton>
  );
};
