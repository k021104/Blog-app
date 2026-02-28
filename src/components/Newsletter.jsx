import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  InputAdornment,
  useTheme
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { MailOutline, Send } from '@mui/icons-material'

const Newsletter = () => {
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <Container maxWidth='lg' sx={{ py: 4, mb: 5 }}>
      {' '}
      {/* Controlled spacing to avoid huge gaps */}
      <Box
        sx={{
          position: 'relative',
          borderRadius: '40px',
          overflow: 'hidden',
          bgcolor: theme.palette.mode === 'dark' ? '#111' : '#f9f9f9',
          border: '1px solid',
          borderColor: 'divider',
          p: { xs: 4, md: 8 },
          textAlign: 'center',
          // Subtle background decoration so it doesn't look empty
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-20%',
            width: '60%',
            height: '200%',
            background:
              'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)',
            zIndex: 0
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '700px',
            mx: 'auto'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant='overline'
              sx={{
                color: 'primary.main',
                fontWeight: 900,
                letterSpacing: 4,
                mb: 1,
                display: 'block'
              }}
            >
              Exclusive Updates
            </Typography>

            <Typography
              variant='h3'
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: '2rem', md: '3.5rem' },
                letterSpacing: '-1.5px',
                lineHeight: 1.1
              }}
            >
              Get the best of{' '}
              <span style={{ color: theme.palette.primary.main }}>
                InK Spire
              </span>
              .
            </Typography>

            <Typography
              variant='body1'
              sx={{
                color: 'text.secondary',
                mb: 5,
                fontSize: '1.1rem',
                opacity: 0.8,
                fontWeight: 500,
                maxWidth: '500px',
                mx: 'auto' // Center alignment ke liye
              }}
            >
              Latest trends and deep-dive stories, delivered twice a month.
              <span
                style={{
                  display: 'block',
                  fontWeight: 700,
                  marginTop: '5px',
                  color: theme.palette.text.primary
                }}
              >
                No noise, just signal.
              </span>
            </Typography>
          </motion.div>

          <AnimatePresence mode='wait'>
            {status !== 'success' ? (
              <Box
                component={motion.form}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  bgcolor:
                    theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.03)'
                      : '#fff',
                  p: 1,
                  borderRadius: '25px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <TextField
                  fullWidth
                  placeholder='Enter your email'
                  variant='standard'
                  type='email'
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment
                        position='start'
                        sx={{ ml: 2, color: 'primary.main' }}
                      >
                        <MailOutline />
                      </InputAdornment>
                    ),
                    sx: { height: '55px', fontSize: '1.1rem' }
                  }}
                  sx={{ px: 1 }}
                />
                <Button
                  variant='contained'
                  type='submit'
                  disabled={status === 'loading'}
                  sx={{
                    borderRadius: '20px',
                    px: 6,
                    py: { xs: 2, sm: 0 },
                    fontWeight: 800,
                    textTransform: 'none',
                    fontSize: '1rem',
                    boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)'
                  }}
                >
                  {status === 'loading' ? 'Joining...' : 'Subscribe'}
                </Button>
              </Box>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '20px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(99,102,241,0.1)',
                  display: 'inline-block'
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    color: 'primary.main',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Send fontSize='small' /> You're on the list! Welcome aboard.
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Box>
    </Container>
  )
}

export default Newsletter
