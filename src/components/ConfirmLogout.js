import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import * as React from 'react'
import { Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { forwardRef } from 'react'

const Transition = forwardRef(function Transition(props: TransitionProps & {
  children: React.ReactElement<any, any>;
}, ref: React.Ref<unknown>) {
  return <Slide direction='up' ref={ref} {...props} />
})

export const ConfirmLogoutDialog = ({ setUser, icon, navigate }) => {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleCloseDialog = () => {
    setOpen(false)
  }
  const handleClose = () => {
    setOpen(false)
    setTimeout(() => {
      sessionStorage.removeItem('token')
      setUser()
      navigate('/login')
    }, 1000)
  }
  return (<>
    <Button icon={icon} variant='outlined' size='large' onClick={handleClickOpen}>
      Зберегти
    </Button>

    <Dialog
      TransitionComponent={Transition}
      keepMounted
      open={open}
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle id='alert-dialog-title'>
        {'Вихід з аккаунту'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          Ви впевнені, що хочете вийти з аккаунту?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Повернутись назад</Button>
        <Button onClick={handleClose} autoFocus>
          Вийти
        </Button>
      </DialogActions>
    </Dialog>
  </>)
}
