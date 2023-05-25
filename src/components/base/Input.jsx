import { clsx } from 'clsx'

export const Input = (props) => {
  const {
    id, label, placeholder, type = 'text', error = false, errorText = '', required = false,
    value, onChange, className = '', ...rest
  } = props

  const labelStyle = 'block text-sm font-medium text-gray-700'
  const baseStyle = 'block w-full px-6 py-2 text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-200 rounded-md shadow-md'
  const errorStyle = 'border-red-600 focus:ring-red-600'
  return (<div className={clsx('relative', className)}>
    {label && (<label htmlFor={id} className={labelStyle}>
      {label} {required && <span className='text-red-500'>*</span>}
    </label>)}
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
      className={clsx(baseStyle, error && errorStyle)}
    />
    {error && <p className='text-xs text-red-600 px-6 mt-1.5'>{errorText || 'Поле не знаповнене'}</p>}
  </div>)
}