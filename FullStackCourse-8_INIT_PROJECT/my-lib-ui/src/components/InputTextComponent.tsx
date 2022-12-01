import { type } from "os";
import React from "react";


type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const InputComponent: React.FC<Props> = (props) => {
  const { label, type } = props;
  return (
    <div className="input_div"> <label htmlFor="">{label} </label> <input type={type} className="input" /></div>
  );
};

export default InputComponent;
