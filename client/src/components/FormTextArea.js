import React from "react";

function FormTextArea({
  id,
  name,
  placeholder,
  label,
  rows,
  cols,
  register
}) {
  return (
    <div className="form_container">
      <label className="input_field_label" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="input_field"
        name={name}
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        rows={rows}
        cols={cols}
        {...register}
      ></textarea>
    </div>
  );
}

export default FormTextArea;
