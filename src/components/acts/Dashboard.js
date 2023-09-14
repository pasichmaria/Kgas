import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, Toolbar, IconButton, Typography, Container, List } from '@mui/material'
import { MdChevronLeft, MdMenu } from 'react-icons/md'
import { Drawer, AppBar } from '../../theme/theme'
import { Divider } from '@mui/material'
import { MainListItems } from './menuItems'
import { useNavigate } from 'react-router-dom'

export const Dashboard = ({ children, user, setUser }) => {
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {user && (
        <AppBar position='absolute' open={open}>
          <Toolbar
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px', ...(open && { display: 'none' })
              }}
            >
              <MdMenu />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Журнал
            </Typography>
          </Toolbar>
        </AppBar>)}
      {user ? (
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1]
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <MdChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component='nav'>
            <MainListItems user={user} setUser={setUser} />
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>) : null}

      <Box
        component='main'
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Toolbar />
        <Container maxWidth='xl'>
          {children}
        </Container>
      </Box>
    </Box>)
}
