export const Loading = ({ size = '', className, variant }) => {
  const variants = {
    error: {
      borderColor: 'border-error-500'
    }, success: {
      borderColor: 'border-black'
    }, primary: {
      borderColor: 'border-primary-500'
    }
  }
  const sizeClasses = {
    sm: 'w-5 h-5', md: 'w-8 h-8', lg: 'w-16 h-16'
  }
  const baseClasses = 'rounded-full animate-spin border-t-2 border-b-2 mx-auto'
  const { borderColor } = variants[variant]
  return <div className={`${baseClasses} ${className} ${sizeClasses[size]} ${borderColor}`} />
}
