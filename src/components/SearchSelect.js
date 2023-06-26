import React, { useState } from 'react';
import { Button, Input } from './base';

export const SearchSelect = (props) => {
  const { label, name, value, onChange, options, error, errorText } = props;
  const [searchTerm, setSearchTerm] = useState(value);
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.value === value)
  );
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSelectedOption(null);

    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionSelect = (option) => {
    setSearchTerm(option.label);
    setSelectedOption(option);
    onChange({ target: { name, value: option.value } });
  };

  const handleClearInput = () => {
    setSearchTerm('');
    setSelectedOption(null);
    setFilteredOptions([]);
  };

  return (
    <div>
      <label>{label}</label>
      <div className="relative">
        <Input
          id={name}
          name={name}
          type="text"
          placeholder="Пошук..."
          value={selectedOption ? selectedOption.label : searchTerm}
          onChange={handleInputChange}
        />
        {searchTerm && (
          <Button
            variant="error"
            type="button"
            onClick={handleClearInput}
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
          >
            х
          </Button>
        )}
        {filteredOptions.length > 0 && (
          <ul className="absolute left-0 right-0 bg-white shadow-lg mt-1 z-10">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className="py-1 px-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <select
        id={name}
        name={name}
        value={selectedOption ? selectedOption.value : ''}
        onChange={onChange}
        className="hidden"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} />
        ))}
      </select>

      {error && (
        <p className="text-xs text-red-600 px-6 mt-1.5">
          {errorText || 'Поле не заповнене'}
        </p>
      )}
    </div>
  );
};