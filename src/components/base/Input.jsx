import {useId, useState} from "react";
import {clsx} from "clsx";
import {Label} from "./Label";

export const  Input = (props) => {
    const {
        id,
        label,
        placeholder,
        type = "text",
        error = false,
        errorText = "",
        required = false,
        value,
        onChange,
        className = "",
        ...rest
    } = props;

    const validateInput = (value) => {
        if (!value) {
            return "This field is required.";
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            return "Please enter a valid email address.";
        }

        return "";
    }
    const styles = {
        base:
            "block w-full px-3 py-2 mt-1 text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-200 rounded-md shadow-md",
        label: "block mb-1 text-sm font-medium text-gray-700",
        input: "w-full",
        error: "border-red-600 focus:ring-red-600",
        required: "required",
    };

    return (
        <div className={clsx("relative", className)}>
            {label && (
                <label htmlFor={id} className={styles.label}>
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
                className={clsx(
                    styles.base,
                    error && styles.error,
                    required && styles.required
                )}
            />
            {error && (
                <p className="text-xs text-red-600 mt-1">{errorText || "Error"}</p>
            )}
        </div>
    );
};