import React from "react";

function FormTextArea({
  id,
  name,
  placeholder,
  label,
  rows,
  cols,
  errorMessage,
  register
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        rows={rows}
        cols={cols}
        {...register}
      ></textarea>
      <span className="error_message">{errorMessage}</span>
    </div>
  );
}

export default FormTextArea;
