import React from 'react'

function SelectForm({selName,mapper}) {
  return (
    <select name={selName} className=" w-full px-4 py-2
        border border-gray-300 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        transition-all duration-200
        placeholder:text-gray-400
        text-gray-700
        hover:border-gray-400">
    {mapper.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
</select>
  )
}

export default SelectForm