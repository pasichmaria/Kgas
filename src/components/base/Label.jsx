import { clsx } from "clsx"

const Label = ({ id, className, children }) => {
  return (
    <label
      className={clsx('text-sm mb-1 mt-8', className)}
      htmlFor={id}
    >
      {children}
    </label>
  )
}

export default Label;