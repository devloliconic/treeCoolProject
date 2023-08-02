import { TreeNode } from "@/_types";

export const defaultTree: TreeNode[] = [
  {
    id: 1,
    name: "Node1",
    children: [
      {
        id: 2,
        name: "Node2",
        children: [
          { id: 3, name: "Node3", children: [] },
          { id: 4, name: "Node4", children: [] },
        ],
      },
      { id: 5, name: "Node5", children: [] },
    ],
  },
];
