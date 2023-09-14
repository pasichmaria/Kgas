import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import * as React from 'react'
import Grid from '@mui/material/Grid'
import { useState } from 'react'

export const ConfirmSaveDialog = () => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleCloseDialog = () => {
    setOpen(false)
  }
  const handleClose = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
    }, 600)
  }

  return (
    <>
      <Button sx={{ float: 'right' }} variant='contained' onClick={handleClickOpen} fullWidth >
        Зберегти
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Бажаєте зберегти акт в базі даних?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Якщо ви збережете акт, ви зможете його переглянути в розділі "Акти".
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} md={6}>
            <Button color="error" fullWidth size={'large'} onClick={handleCloseDialog} autoFocus>
              Не зберігати
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant='contained'  type='submit' fullWidth size={'large'}
              onClick={handleClose} autoFocus>
              Зберегти
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </>)
}
