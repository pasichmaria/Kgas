import React from 'react'
export const Select = ({ label, name, value, options, onChange }) => {
  return (
    <div className="flex flex-col w-full mt-10">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded-md py-2 focus:border-blue-500 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
