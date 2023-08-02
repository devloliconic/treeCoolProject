import { TreeNode } from "@/_types";

export const findNodeById = (tree: TreeNode[], id: number): TreeNode | null => {
  for (const node of tree) {
    if (node.id === id) {
      return node;
    } else {
      const foundInChildren = findNodeById(node.children, id);
      if (foundInChildren) {
        return foundInChildren;
      }
    }
  }
  return null;
};

export const cloneNode = (node: TreeNode): TreeNode => {
  return { ...node, children: node.children.map(cloneNode) };
};

export const findAndAddChildNode = (
  nodes: TreeNode[],
  name: string,
  parentId: number,
  idCounter: number,
) => {
  for (const node of nodes) {
    if (node.id === parentId) {
      node.children.push({ name, id: idCounter + 1, children: [] });
    } else {
      findAndAddChildNode(node.children, name, parentId, idCounter);
    }
  }
};

export const removeNode = (nodes: TreeNode[], nodeIdToRemove: number) => {
  return nodes.filter((node) => {
    if (node.id === nodeIdToRemove) {
      return false;
    }
    node.children = removeNode(node.children, nodeIdToRemove);
    return true;
  });
};

export const updateNodeName = (
  nodes: TreeNode[],
  nodeIdToUpdate: number,
  newName: string,
) => {
  return nodes.map((node) => {
    if (node.id === nodeIdToUpdate) {
      return { ...node, name: newName }; // Изменяем название узла
    } else {
      // Рекурсивно обновляем узел в дочерних узлах
      node.children = updateNodeName(node.children, nodeIdToUpdate, newName);
      return node;
    }
  });
};
