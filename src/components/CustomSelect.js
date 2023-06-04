import React from "react";

function CustomSelect({ id, name, label, register, categories,event }) {
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
    </div>
  );
}

export default CustomSelect;
