import React from "react";

import { TreeNode } from "@/_types";

import { ChildrenBox, Text } from "./styles";

interface Props {
  id: number;
  children: TreeNode[];
  name: string;
  onClick: (id: number) => void;
  selectedNode?: number;
}

export const Node = ({ id, children, name, onClick, selectedNode }: Props) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(id);
  };

  return (
    <div onClick={handleClick}>
      <Text $isSelected={selectedNode === id}>{name}</Text>
      <ChildrenBox>
        {children.length > 0 &&
          children.map((it) => (
            <Node
              key={it.id + it.name}
              id={it.id}
              name={it.name}
              children={it.children}
              onClick={onClick}
              selectedNode={selectedNode}
            />
          ))}
      </ChildrenBox>
    </div>
  );
};
