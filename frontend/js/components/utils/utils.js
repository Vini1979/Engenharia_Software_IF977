import React from "react";

import { Label } from "./styles";

const Input = ({ text, type, value }) => {
  return (
    <Label>
      <input type={type} value={value} placeholder="" />
      <p>{text}</p>
    </Label>
  );
};

export default Input;
