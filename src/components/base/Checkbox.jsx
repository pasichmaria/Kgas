import { clsx } from 'clsx'
import { useState } from 'react'
export const Checkbox = ({ label, name, value, checked, onChange, className }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleInputChange = (e) => {
    const inputValue = e.target.checked
    setIsChecked(inputValue)
    onChange({ target: { name, value: inputValue } })
  }
  return (
    <div className={clsx('flex items-center', className)}>
      <input
        type='checkbox'
        id={name}
        name={name}
        checked={isChecked}
        value={value}
        onChange={handleInputChange}
        className='mt-1.5 form-checkbox text-green-600 transition'
      />
      <label htmlFor={name} className='ml-3 block text-sm font-medium text-gray-700'>
        {label}
      </label>
    </div>
  )
}