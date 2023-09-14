import React, { useState, forwardRef } from 'react'
import {
  Button,
  Grid,
  ListItemButton,
  DialogContent,
  DialogContentText,
  Slide,
  ListItemIcon,
  ListItemText,
  Dialog,
  ListItem,
  DialogTitle,
  DialogActions,
  TransitionProps
} from '@mui/material'
import {
  MdBarChart, MdContactSupport, MdDashboard, MdLogout, MdPaid, MdTextSnippet, MdWarning
} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Transition = forwardRef(function Transition(props: TransitionProps & {
  children: React.ReactElement<any, any>;
}, ref: React.Ref<unknown>) {
  return <Slide direction='up' ref={ref} {...props} />
})

const listItems = [{
  text: 'Акти порушень', icon: <MdDashboard />, path: '/acts'
}, {
  text: 'Протерміновані акти', icon: <MdWarning />, path: '/deniedActs'
}, {
  text: 'Преміювання', icon: <MdPaid />, path: '/awards'
}, {
  text: 'Звітність', icon: <MdBarChart />, path: '/reporting'
}, {
  text: 'Тех підтримка', icon: <MdContactSupport />, path: '/support'
}, {
  text: 'Внутрішні документі', icon: <MdTextSnippet />, path: '/internalDocuments'
}]

export const MainListItems = ({ user, setUser }) => {
  const navigate = useNavigate()
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false)

  const closeLogoutDialog = () => {
    setLogoutDialogOpen(false)
  }

  const confirmLogout = () => {
    handleLogout()
    closeLogoutDialog()
  }

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    setUser(null)
    navigate('/login')
  }
  return (<>
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      open={isLogoutDialogOpen}
      onClose={closeLogoutDialog}
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
        <Grid container={true} justifyContent={'space-around'}>
          <Grid item={true}>
            <Button  variant='contained' onClick={closeLogoutDialog} size={'large'} >
              Назад
            </Button>
          </Grid>
          <Grid item={true}>
            <Button  variant='outlined' onClick={confirmLogout} size={'large'}>
              Вийти
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>

    {listItems.map((item, index) => (<ListItemButton key={index} onClick={() => navigate(item.path)}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItemButton>))}

    <ListItem button onClick={() => setLogoutDialogOpen(true)}>
      <ListItemIcon>
        <MdLogout />
      </ListItemIcon>
      <ListItemText primary='Вихід' />
    </ListItem>
  </>)
}