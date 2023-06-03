import React from 'react'

function CustomSelect({
  id,
  name,
  label,
  register,
  errorMessage
}) {
  return (
    <div className="select_container">
      <label className="input_field_label" htmlFor={id}>
        {label}
      </label>
      <select id={id} name={name} {...register}>
        <option value="Category">Choose a Category----</option>
        <option value="Electronics">Electronics</option>
        <option value="Groceries"> Groceries</option>
        <option value="Cosmetics">Cosmetics</option>
      </select>
      <span className="error_message">{errorMessage}</span>
    </div>
  );
}

export default CustomSelect