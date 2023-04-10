import React from 'react';

export const Select = ({label, name, value, options, onChange }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="text-sm font-medium mb-1">{label}</label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full border rounded py-2 px-4 focus:border-blue-500 focus:ring-blue-500"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};