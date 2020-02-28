import React from "react";

const Input = props => {
  const { type, name, error, label, value, onChange } = props;

  return (
    <div className="form-label-group">
      <input
        type={type}
        name={name}
        className={error ? "form-control is-invalid" : "form-control"}
        placeholder={label}
        value={value}
        onChange={onChange}
        autoFocus
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
