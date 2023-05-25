import React from 'react'

export const Button = (props) => {
  const {
    isDisabled,
    label,
    onClick,
    variant,
    type = 'button',
    size = '',
    className,
    children,
    ...rest
  } = props

  const variants = {
    error: {
      bgColor: 'bg-rose-500',
      borderColor: 'border-b-4 border-gray-400 hover:border-gray-800',
      textColor: 'text-white'
    },
    warning: {
      bgColor: 'bg-yellow-300',
      borderColor: 'border-b-4 border-yellow-400 hover:border-yellow-800',
      textColor: 'text-black'
    },
    success: {
      bgColor: 'bg-green-300',
      borderColor: 'border-b-4 border-green-600 hover:border-green-800',
      textColor: 'text-black'
    },
    primary: {
      bgColor: 'bg-cyan-500',
      borderColor: 'border-b-4 border-cyan-600 hover:border-cyan-800',
      textColor: 'text-black'
    }
  }

  const sizeClasses = {
    sm: 'px-1 py-2 w-2/12',
    md: 'px-4 py-2 w-4/12',
    lg: 'px-6 py-3 w-6/12'
  }

  const baseClasses =
    'mb-6 border-b-4 border-gray-400 hover:border-gray-800 rounded text-md text-center rounded-md wi'

  const { borderColor, bgColor, textColor } = variants[variant]

  return (
    <button
      onClick={onClick}
      type={type}
      label={label}
      className={`${baseClasses} ${className} ${sizeClasses[size]}  ${borderColor} ${bgColor} ${textColor}`}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  )
}