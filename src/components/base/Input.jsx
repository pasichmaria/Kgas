import { clsx } from 'clsx'
export const Input = (props) => {
  const {
    id,
    label,
    placeholder,
    type = 'text',
    error = false,
    errorText = '',
    required = false,
    value,
    onChange,
    className = '',
    isNumberActValid = false,
    ...rest
  } = props

  const baseStyles = 'block w-full px-6 py-2 text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-200 rounded-md shadow-md'
  const labelStyles = 'block text-sm font-medium text-gray-700'
  const errorStyles = 'border-red-600 focus:ring-red-600'
  const requiredStyles = 'required'
  return (
    <div className={clsx('relative', className)}>
      {label && (
        <label htmlFor={id} className={labelStyles}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
        className={clsx(baseStyles, error && errorStyles, required && requiredStyles, isNumberActValid ? '' : 'border-red-600')}
      />
      {error && <p className="text-xs text-red-600 px-6 mt-1.5">{errorText || 'Error'}</p>}
    </div>
  )
}