import React, { useRef, useState } from "react";

import { Container, Tree, TreeContainer } from "@/App.styles.ts";
import { TreeNode } from "@/_types";
import { Node } from "@/components/Node/Node.tsx";
import { NodeModal, ToolPanel } from "@/modules";
import { useTreeStore } from "@/store";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<number | undefined>(
    undefined,
  );

  const nodeFlagRef = useRef<"create" | "edit">("create");
  const { tree, removeNode, addNode, updateNodeName, resetTree } =
    useTreeStore();

  const handleCreateNode = (name: string) => {
    addNode(name, selectedNode);
    setSelectedNode(undefined);
  };
  const handleEditNode = (name: string) => {
    selectedNode && updateNodeName(selectedNode, name);
    setSelectedNode(undefined);
  };

  const handleEditClick = () => {
    if (selectedNode) {
      nodeFlagRef.current = "edit";
      setIsModalOpen(true);
    }
  };
  const handleAddClick = () => {
    nodeFlagRef.current = "create";
    setIsModalOpen(true);
  };

  const handleRemoveClick = () => {
    selectedNode && removeNode(selectedNode);
    setSelectedNode(undefined);
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    setSelectedNode(undefined);
    e.stopPropagation();
  };

  return (
    <Container>
      <ToolPanel
        onAddClick={handleAddClick}
        onRemoveClick={handleRemoveClick}
        onEditClick={handleEditClick}
        onResetClick={() => resetTree()}
      />
      <NodeModal
        flag={nodeFlagRef.current}
        onCreateNode={handleCreateNode}
        onEditNode={handleEditNode}
        isModalOpen={isModalOpen}
        nodeId={selectedNode}
        onModalClose={() => setIsModalOpen(false)}
      />

      <TreeContainer onClick={handleContainerClick}>
        <Tree>
          {tree.map((it: TreeNode) => (
            <Node
              selectedNode={selectedNode}
              key={it.id + it.name}
              id={it.id}
              name={it.name}
              children={it.children}
              onClick={(id: number) => setSelectedNode(id)}
            />
          ))}
        </Tree>
      </TreeContainer>
    </Container>
  );
};
