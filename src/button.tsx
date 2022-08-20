import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";

export type ButtonProps = {
  text: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text }: ButtonProps, ref) => <button ref={ref}>{text}</button>
);

// const Button = ({ text }: ButtonProps) => <button>{text}</button>;

export default Button;
