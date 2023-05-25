import React from 'react'
import classNames from 'classnames'
import { clsx } from 'clsx'

import { Label } from './Label'

export const TextArea = (props) => {
  const {
    id,
    label,
    className,
    rows = 4,
    cols = 50,
    error = false,
    errorText = '',
    required = false
  } = props
  const classes = classNames(
    'appearance-none',
    'block',
    'w-full',
    'bg-gray-100',
    'text-gray-900',
    'block w-full px-3 py-2 mt-1 text-black focus:ring-2 rounded-md focus:ring-offset-2 shadow-md',
    'rounded py-3',
    'py-3',
    'mb-3',
    'focus:outline-none',
    'focus:bg-white',
    className
  )
  return (
    <div className={clsx('relative', className)}>
      {label && (
        <Label id={id}>
          {label} {required && '*'}
        </Label>
      )}
      <textarea id={id} rows={rows} cols={cols} className={classes} {...props} />
      {error && <p className='mt-2 text-sm text-red-600'>{errorText}</p>}
    </div>
  )
}
