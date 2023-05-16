import React from 'react'
import { clsx } from 'clsx'

export const Select = (props) => {
  const { name, value, options, onChange, error = false, errorText = '' } = props

  const errorStyles = 'border-red-600 focus:ring-red-600'
  const baseStyle = 'block w-full px-6 py-2 text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-200 rounded-md shadow-md'

  return (
    <div className='flex flex-col w-full mt-10'>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={clsx(baseStyle, error && errorStyles)}
      >

        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600 px-6 mt-1.5">{errorText || 'Поле не знаповнене'}</p>}
    </div>
  )
}
