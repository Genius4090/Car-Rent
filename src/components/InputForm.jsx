import React from 'react'

function InputForm({ value, placeholder, inpType}) {
  return (
    <input
      required
      name={value}
      type={inpType}
      placeholder={placeholder}
      className="
        w-full px-4 py-2 
        border border-gray-300 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        transition-all duration-200
        placeholder:text-gray-400
        text-gray-700
        hover:border-gray-400
      "
    />
  )
}

export default InputForm