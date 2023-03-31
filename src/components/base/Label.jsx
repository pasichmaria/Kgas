import { clsx } from "clsx"

const Label = ({ id, className, children }) => {
  return (
    <label
      className={clsx('text-sm text-white', className)}
      htmlFor={id}
    >
      {children}
    </label>
  )
}

export default Label;