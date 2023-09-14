import React, { useState } from 'react';
import { Button, InputAdornment, TextField } from '@mui/material';
import { MdAttachFile } from 'react-icons/md';

export const FileUpload = ({ accept, buttonText, type }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const uploadedFiles = event.target.files;
    setFiles([...files, ...uploadedFiles]);
  };

  const handleFileRemove = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <div>
      <TextField
        color='secondary'
        size={'large'}
        variant={'outlined'}
        label={buttonText}
        type={type}
        accept={accept}
        onChange={handleFileChange}
        sx={{ width: '100%' }}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <>
              {files.length > 0 ? (
                <div>
                  {files.map((file, index) => (
                    <div key={index}>
                      <span>{file.name}</span>
                      <Button
                        sx={{ marginLeft: 3 }}
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleFileRemove(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <MdAttachFile color='secondary' />
              )}
            </>
          ),
        }}
      />
    </div>
  );
};
