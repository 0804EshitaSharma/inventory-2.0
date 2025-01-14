import React from 'react'
import "./FormInput.css";

function FormInput({id,name,placeholder,type,label,register}) {
  return (
    <div className='form_container'>
      <label className="input_field_label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input_field"
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        {...register}
      ></input>
    </div>
  );
}

export default FormInput