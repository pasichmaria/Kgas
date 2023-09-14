import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export function Title({ children }) {
  return (
    <Typography
      component="h1"
      variant="h6"
      color="primary"
      gutterBottom
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

