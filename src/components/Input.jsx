import { useId } from "react";
import { clsx } from "clsx";
import Label from "./Label";

const Input = (props) => {
  const {
    label,
    autocomplete = "",
    type = "",
    error = false,
    required = false,
    disabled = false,
    valid = false,
    className = "",
    errorText = "",
    rounded = "lg",
    ...child
  } = props;

  const id = useId();

  const styles = {
    base: "block w-full px-3 py-2 mt-1 text-black focus:ring-2 rounded-md focus:ring-offset-2 shadow-md",
    state: {
      normal: "placeholder-gray-700 border-gray-300 focus:ring-cyan-200",
      error: "border-red-600 focus:ring-red-600",
      valid: "border-green-600 focus:ring-green-600",
      disabled: "cursor-not-allowed bg-gray-100 shadow-inner text-gray-400",
    },

    rounded: {
      none: null,
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  };

  return (
    <div className={clsx("relative", className)}>
      {label && (
        <Label id={id}>
          {label} {required && "*"}
        </Label>
      )}
      <input
        id={id}
        type={type}
        className={clsx([
          styles.base,
          rounded && styles.rounded[rounded],
          error ? styles.state.error : styles.state.normal,
          valid ? styles.state.valid : styles.state.normal,
          disabled && styles.state.disabled,
        ])}
        disabled={disabled}
        required={required}
        {...child}
      />
      {error && <p className="mt-2 text-sm text-red-600">{errorText}</p>}
    </div>
  );
};

export default Input;
