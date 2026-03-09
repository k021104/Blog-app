import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
  useTheme,
  useScrollTrigger,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider
} from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import SearchIcon from '@mui/icons-material/Search'
import CreateIcon from '@mui/icons-material/CreateOutlined'
import CloseIcon from '@mui/icons-material/Close'
import './Navbar.css'

const Navbar = ({ toggleColorMode }) => {
  const theme = useTheme()
  const location = useLocation()
  const isDarkMode = theme.palette.mode === 'dark'
  const [mobileOpen, setMobileOpen] = useState(false)

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  })

  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((window.pageYOffset / height) * 100)
    }
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Topics', path: '/topics' },
    { title: 'Newsletter', path: '/news' },
    { title: 'About', path: '/about' }
  ]

  return (
    <>
      <motion.div
        className='top-progress'
        style={{ width: `${scrollProgress}%` }}
      />

      <AppBar
        position='fixed'
        elevation={0}
        className={
          trigger ? 'navbar-glass navbar-scrolled' : 'navbar-container'
        }
        sx={{
          '--nav-bg': isDarkMode
            ? 'rgba(15, 23, 42, 0.8)'
            : 'rgba(255, 255, 255, 0.8)',
          '--nav-border': isDarkMode
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(0, 0, 0, 0.08)',
          '--nav-active-pill': isDarkMode
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar
            sx={{ height: { xs: 70, md: 80 }, justifyContent: 'space-between' }}
          >
            {/* 1. BRANDING */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant='h6'
                component={NavLink}
                to='/'
                className='premium-logo'
                sx={{
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }}
              >
                INK
                <Box component='span' sx={{ color: '#6366f1' }}>
                  SPIRE
                </Box>
              </Typography>
            </Box>

            {/* 2. DESKTOP NAV (Hidden on Mobile) */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                bgcolor: trigger ? 'transparent' : 'var(--nav-active-pill)',
                borderRadius: '50px',
                px: 1,
                ml: 11,
                py: 0.5,
                gap: 1
              }}
            >
              {navLinks.map(link => (
                <Box key={link.title} sx={{ position: 'relative' }}>
                  <Button
                    component={NavLink}
                    to={link.path}
                    className='nav-link'
                    sx={{
                      color: theme.palette.text.primary,
                      px: 2,
                      borderRadius: '50px'
                    }}
                  >
                    {link.title}
                  </Button>

                  {location.pathname === link.path && (
                    <motion.div
                      layoutId='pill'
                      className='active-pill'
                      style={{ inset: 0 }}
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>

            {/* 3. UTILITIES */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 1 }
              }}
            >
              <IconButton
                size='small'
                sx={{ color: theme.palette.text.secondary }}
              >
                <SearchIcon fontSize='small' />
              </IconButton>

              <IconButton
                onClick={toggleColorMode}
                size='small'
                sx={{ color: theme.palette.text.secondary }}
              >
                {theme.palette.mode === 'dark' ? (
                  <LightModeIcon fontSize='small' />
                ) : (
                  <DarkModeIcon fontSize='small' />
                )}
              </IconButton>

              <Box
                sx={{
                  width: '1px',
                  height: '20px',
                  bgcolor: 'var(--nav-border)',
                  mx: { xs: 0.5, sm: 1 }
                }}
              />

              <Button
                variant='contained'
                startIcon={<CreateIcon />}
                component={NavLink}
                to='/create'
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: 'none',
                  bgcolor: theme.palette.text.primary,
                  color: theme.palette.background.default,
                  '&:hover': {
                    bgcolor: theme.palette.text.secondary,
                    boxShadow: 'none'
                  }
                }}
              >
                Write
              </Button>

              {/* Mobile Menu Toggle */}
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: 'none' },
                  color: theme.palette.text.primary
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          className: 'mobile-drawer-paper',
          sx: {
            width: '280px',
            bgcolor: theme.palette.background.default,
            backgroundImage: 'none'
          }
        }}
      >
        <Box
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography
            variant='h6'
            sx={{ px: 2, mb: 3, fontWeight: 900, letterSpacing: -1 }}
          >
            INK<span style={{ color: '#6366f1' }}>SPIRE</span>
          </Typography>

          <List sx={{ mb: 'auto' }}>
            {navLinks.map(item => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: '12px',
                    mx: 1,
                    mb: 1,
                    '&.active': {
                      bgcolor: 'var(--nav-active-pill)',
                      color: '#6366f1'
                    }
                  }}
                >
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2, opacity: 0.1 }} />

          <Button
            fullWidth
            variant='contained'
            startIcon={<CreateIcon />}
            component={NavLink}
            to='/create'
            onClick={handleDrawerToggle}
            sx={{
              py: 1.5,
              borderRadius: '12px',
              textTransform: 'none',
              fontWeight: 700,
              bgcolor: theme.palette.text.primary,
              color: theme.palette.background.default
            }}
          >
            Create New Post
          </Button>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
