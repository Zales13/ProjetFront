import { type } from "os";
import React, {useState} from "react";


type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const InputComponent: React.FC<Props> = (props) => {
  const { label, type, onChange } = props; 
  const [active,setActive ]= useState <boolean> (false)
  return (
    <div  className={active?"input_div active": "input_div"} onClick={()=>setActive(true)} onMouseLeave={()=>setActive(false)}> 
    <label htmlFor="">{label} </label>
    <input type={type} className="input" onChange={onChange}/>
    </div>
  );
};

export default InputComponent;
