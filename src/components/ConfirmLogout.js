import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import * as React from 'react'

export const ConfirmLogoutDialog = ({ setUser , icon , navigate }) => {  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      localStorage.removeItem('token')
      setUser()
      navigate('/login')
    }, 1000);
  };
  return ( <div>
    <Button  icon={icon} variant="outlined" onClick={handleClickOpen}>
      Зберегти
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Вихід з аккаунту"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Ви впевнені, що хочете вийти з аккаунту?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Повернутись назад</Button>
        <Button onClick={handleClose } autoFocus>
          Вийти
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}
