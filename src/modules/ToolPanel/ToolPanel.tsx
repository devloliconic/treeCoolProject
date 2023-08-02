import { Button } from "@/components";

import { FlexBox } from "./styles";

interface Props {
  onAddClick: () => void;
  onRemoveClick: () => void;
  onEditClick: () => void;
  onResetClick: () => void;
}
export const ToolPanel = ({
  onAddClick,
  onRemoveClick,
  onResetClick,
  onEditClick,
}: Props) => {
  return (
    <FlexBox>
      <Button onClick={onAddClick}>Add</Button>
      <Button onClick={onRemoveClick}>Remove</Button>
      <Button onClick={onEditClick}>Edit</Button>
      <Button onClick={onResetClick}>Reset</Button>
    </FlexBox>
  );
};
