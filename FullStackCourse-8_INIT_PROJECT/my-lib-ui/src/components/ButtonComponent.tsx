import React from "react";
type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;


const ButtonComponent: React.FC <Props> = (props) => { 
  const {onClick, children } = props 
  const handelonClick=(e:any)=>{
    if (onClick)
      onClick(e)
  }
  return <button className="buttoncomponent" onClick={handelonClick}> {children} </button> ;
};

export default ButtonComponent;
