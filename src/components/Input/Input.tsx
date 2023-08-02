import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

import { BaseInput } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  ref: ForwardedRef<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ ...props }, ref) => {
    return <BaseInput {...props} ref={ref} />;
  },
);
