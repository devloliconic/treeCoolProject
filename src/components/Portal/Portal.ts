import React from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

export const Portal = ({ children }: Props) => {
  let portalNode = document.querySelector("#portalNode");

  if (!portalNode) {
    portalNode = document.body;
  }

  return createPortal(children, portalNode);
};
