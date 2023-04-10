import { useId, useState } from "react";
import { clsx } from "clsx";
import Label from "./Label";

export const Input = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const validateInput = (value) => {
    if (!value) {
      return "This field is required.";
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      return "Please enter a valid email address.";
    }

    return "";
  };
  const {
    label,
    autocomplete = "",
    type = "",
    required = false,
    disabled = false,
    valid = false,
    className = "",
    rounded = "",
    size = "",
    validate = (value) => "", // default validation function that always returns an empty string
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
      lg: "rounded-lg w-10",
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
            size={size}
            className={clsx([
              styles.base,
              rounded && styles.rounded[rounded],
              error ? styles.state.error : styles.state.normal,
              valid ? styles.state.valid : styles.state.normal,
              disabled && styles.state.disabled,
            ])}
            disabled={disabled}
            required={required}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(validate(e.target.value));
            }}
            {...child}
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
  );
};
