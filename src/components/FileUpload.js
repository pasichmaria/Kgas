import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { MdAttachFile } from 'react-icons/md'
export const FileUpload = ({ accept, buttonText, type }) => {
  const [file, setFile] = useState(null)
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0]
    setFile(uploadedFile)
  }
  return (
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
        shrink: true
      }}
      InputProps={{
        endAdornment: (<>
            {file ? (<span>{file.name}</span>) : (<MdAttachFile color='secondary' />)}
          </>)
      }}
    />)
}