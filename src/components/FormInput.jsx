import React from 'react'

function FormInput({value,placeholder,inpType}) {
  return (
    <input required name={value} type={inpType} placeholder={placeholder} className="outline-none border w-full py-1 rounded-[6px] px-2"/>
  )
}

export default FormInput