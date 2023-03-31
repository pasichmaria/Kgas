import React from "react";

export const Button = (props) => {
    const {
        onClick,
        label,
        size,
        buttonType,
        className,
        type,
        style,
        disabled,
        children,
    } = props;

    const buttonTypes = {
        error: {
            textColor: "text-black",
            bgColor: "bg-rose-500",
            borderColor: "border-rose-300",
        },
        warning: {
            textColor: "text-black",
            bgColor: "bg-yellow-300",
            borderColor: "border-green-400",
        },
        success: {
            textColor: "text-black",
            bgColor: "bg-green-300",
            borderColor: "border-green-400",
        },
        primary: {
            textColor: "text-white",
            bgColor: "bg-cyan-500",
            borderColor: "border-blue-500",
        },
    };

    const buttonTypeClass = buttonTypes[buttonType];

    return (
        <button
            className={`w-full px-4 py-2 mt-2.5 text-sm text-center rounded-md ${
                className ?? ""
            } ${buttonTypeClass.textColor} ${buttonTypeClass.bgColor} ${
                buttonTypeClass.borderColor
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            size={size}
            style={{ ...style }}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
