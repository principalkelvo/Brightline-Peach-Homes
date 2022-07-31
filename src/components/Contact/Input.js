import InputCSS from "./Input.module.css";
import React from "react";

function Input({ id, type, name, value, onChange, label }) {
  return (
    <div className={InputCSS.input}>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <span className={InputCSS.highlight}></span>
      <span className={InputCSS.highlight}></span>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
export default Input;
