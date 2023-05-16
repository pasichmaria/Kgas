import { clsx } from 'clsx'
import PropTypes from 'prop-types'
export const Checkbox = ({ label, selected , className , onChange }) => {

  return (
    <div className={clsx('flex items-center', className)}>
      <input
        type='checkbox'
        defaultChecked={selected}
        value={selected}
        onChange={onChange}
        id={name}
        name={name}
        className='border-cyan-900 mt-1.5 form-checkbox text-green-600 transition'
      />
      <label htmlFor={name} className='ml-3 block text-sm font-medium text-gray-700'>
        {label}
      </label>
    </div>
  )
}
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  selected : PropTypes.bool.isRequired,
  onChange : PropTypes.func.isRequired,
}