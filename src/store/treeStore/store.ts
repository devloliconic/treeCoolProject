import { create } from "zustand";

import { TreeNode } from "@/_types";
import { defaultTree } from "@/constants";
import {
  cloneNode,
  findAndAddChildNode,
  removeNode,
  updateNodeName,
} from "@/utils";

type TreeStore = {
  tree: TreeNode[];
  idCounter: number;
  addNode: (name: string, id?: number) => void;
  removeNode: (id: number) => void;
  updateNodeName: (id: number, newName: string) => void;
  resetTree: () => void;
};

export const useTreeStore = create<TreeStore>()((set) => ({
  tree: defaultTree,
  idCounter: 5,
  addNode: (name, id) =>
    set((state) => {
      const clonedTree = state.tree.map(cloneNode);
      if (!id) {
        clonedTree.push({ name, id: state.idCounter + 1, children: [] });
        return {
          tree: clonedTree,
          idCounter: state.idCounter + 1,
        };
      }
      findAndAddChildNode(clonedTree, name, id, state.idCounter);
      return { tree: clonedTree, idCounter: state.idCounter + 1 };
    }),
  removeNode: (id) =>
    set((state) => {
      const clonedTree = state.tree.map(cloneNode);
      return { tree: removeNode(clonedTree, id) };
    }),
  updateNodeName: (id, newName) =>
    set((state) => {
      const clonedTree = state.tree.map(cloneNode);
      return { tree: updateNodeName(clonedTree, id, newName) };
    }),
  resetTree: () => set(() => ({ tree: defaultTree })),
}));
