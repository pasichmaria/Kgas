import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import {
  MdAddchart,
  MdCalendarMonth,
  MdEditDocument,
  MdFace,
  MdHome,
  MdLogin,
  MdLogout,
  MdMenu,
  MdSupportAgent
} from 'react-icons/md';
import {
  BottomNavigation,
  BottomNavigationAction, Button,
  Dialog,
  DialogActions,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

export const Navigation = ({ children, user, setUser }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openLogoutDialog = () => {
    setLogoutDialogOpen(true);
  };

  const closeLogoutDialog = () => {
    setLogoutDialogOpen(false);
  };

  const confirmLogout = () => {
    handleLogout();
    closeLogoutDialog();
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <BottomNavigation
          sx={{ width: 1, height: '8vh', position: 'fixed' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {!user && (
            <BottomNavigationAction
              component={Link}
              to="/login"
              label="Вхід"
              value="Login"
              icon={<MdLogin />}
            />
          )}
          <BottomNavigationAction
            component={Link}
            to="/support"
            label="Технічна підтрика"
            value="Support"
            icon={<MdSupportAgent />}
          />

          {user ? (
            <BottomNavigationAction
              component={Link}
              to="/acts"
              label="Акти порушень"
              value="Acts"
              icon={<MdEditDocument />}
            />
          ) : null}

          {user && (
            <BottomNavigationAction
              onClick={openLogoutDialog}
              label="Вихід"
              value="Logout"
              icon={<MdLogout />}
            />
          )}
          {user ? (
            <BottomNavigationAction
              onClick={toggleSidebar}
              label="Меню"
              value="Menu"
              icon={<MdMenu />}
            />
          ) : null}
        </BottomNavigation>
      </AppBar>
      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
        <List>
          <ListItem button component={Link} to="/home">
            <ListItemIcon>
              <MdHome />
            </ListItemIcon>
            <ListItemText primary="Головна" />
          </ListItem>

          <ListItem button component={Link} to="/acts">
            <ListItemIcon>
              <MdEditDocument />
            </ListItemIcon>
            <ListItemText primary="Акти порушень" />
          </ListItem>

          <ListItem button component={Link} to="/deniedActs">
            <ListItemIcon>
              <MdFace />
            </ListItemIcon>
            <ListItemText primary="Протерміновані акти" />
          </ListItem>

          <ListItem button component={Link} to="/reporting">
            <ListItemIcon>
              <MdAddchart />
            </ListItemIcon>
            <ListItemText primary="Звітність" />
          </ListItem>

          <ListItem button component={Link} to="/internalDocuments">
            <ListItemIcon>
              <MdCalendarMonth />
            </ListItemIcon>
            <ListItemText primary="Внутрішні документи" />
          </ListItem>

          <ListItem button component={Link} to="/support">
            <ListItemIcon>
              <MdSupportAgent />
            </ListItemIcon>
            <ListItemText primary="Технічна підтрика" />
          </ListItem>

          <ListItem button onClick={openLogoutDialog}>
            <ListItemIcon>
              <MdLogout />
            </ListItemIcon>
            <ListItemText primary="Вихід" />
          </ListItem>
        </List>
      </Drawer>
      <>
        {children}
      </>
      <Footer />
      <Dialog open={isLogoutDialogOpen} onClose={closeLogoutDialog} aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
        {"Вийти з аккаунту ?"}
      </DialogTitle>
        <DialogActions sx={{ justifyContent : 'center' }} >
          <Button  size={'large'} onClick={closeLogoutDialog}>Скасувати</Button>
          <Button size={'large'} onClick={confirmLogout}>Вийти</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
