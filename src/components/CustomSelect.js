import React from "react";

function CustomSelect({ id, name, label, register, errorMessage, categories,event }) {
  const options = categories.map((option) => (
    <option key={option.id} value={option.text}>
      {option.text}
    </option>
  ));

  return (
    <div className="select_container">
      {label ?
      <label className="input_field_label" htmlFor={id}>
        {label}
      </label>:""
}
      <select id={id} name={name} {...register} onChange={event}>
        {options}
      </select>
      <span className="error_message">{errorMessage}</span>
    </div>
  );
}

export default CustomSelect;
