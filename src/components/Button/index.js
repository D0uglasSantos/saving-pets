import React from "react";
import "./style.css";

const Button = (props) => {
  return (
    <a href={props.link}>
      <button style={{ backgroundColor: props.cor, borderRadius:"50px" }}>{props.text}</button>
    </a>
  );
};

export default Button;
