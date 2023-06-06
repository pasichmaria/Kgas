import React, { useState } from 'react';
import { Input, Label } from './base';

export const SearchSelect = ( props ) => {
  const { name, value, options, onChange, error = false, errorText = '' } = props
  const [searchTerm, setSearchTerm] = useState(value);
  const [selectedOption, setSelectedOption] = useState(options.find((option) => option.value === value));

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSelectedOption(options.find((option) => option.label.toLowerCase() === value.toLowerCase()));
    onChange(event)
  };

  return (
    <div>
      <Input
        id={name}
        name={name}
        type='text'
        placeholder='Пошук...'
        value={searchTerm}
        onChange={handleInputChange}
        list='options'
      />

      <datalist id='options'>
        {options.map((option) => (
          <option key={option.value} value={option.label} />
        ))}
      </datalist>
      {error && (
        <p className='text-xs text-red-600 px-6 mt-1.5'>
          {errorText || 'Поле не заповнене'}
        </p>
      )}
    </div>
  );
};