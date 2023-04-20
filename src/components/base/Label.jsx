import {clsx} from "clsx"

export const Label = ({id, className, children}) => {
    return (
        <label
            className={clsx('mb-3 text-lg mb-1 mt-8', className)}
            htmlFor={id}
        >
            {children}
        </label>
    )
}