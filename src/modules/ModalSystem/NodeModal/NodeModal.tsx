import { useState } from "react";

import { Button, Input } from "@/components";
import { BaseModal } from "@/modules";
import { FlexBox } from "@/modules/ModalSystem/NodeModal/styles.ts";

interface Props {
  isModalOpen: boolean;
  onModalClose: () => void;
  onCreateNode: (name: string) => void;
  onEditNode: (name: string) => void;
  flag: "edit" | "create";
  nodeId?: number;
}

export const NodeModal = ({
  isModalOpen,
  onModalClose,
  onCreateNode,
  onEditNode,
  flag,
}: Props) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    flag === "create" ? onCreateNode(name) : onEditNode(name);
    setName("");
    onModalClose();
  };

  return (
    <BaseModal
      isOpen={isModalOpen}
      onModalClose={onModalClose}
      title={flag === "create" ? "Create Node" : "Edit Node"}
    >
      <FlexBox>
        <Input onChange={(e) => setName(e.target.value)} value={name} />
        <Button onClick={handleSubmit} disabled={!name}>
          {flag === "create" ? "Create" : "Edit"}
        </Button>
      </FlexBox>
    </BaseModal>
  );
};
