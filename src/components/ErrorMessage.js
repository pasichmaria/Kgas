import React from 'react';
import { useField } from 'formik';

export const ErrorMessage = ({ name }) => {
  const [field, meta] = useField(name);

  return meta.touched && meta.error ? (
    <div className="text-red-500 text-sm">{meta.error}</div>
  ) : null;
};