import React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme
} from '@mui/material'
import { motion } from 'framer-motion'

const Hero = () => {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'background.default',
        pt: { xs: 12, md: 15, sm: 15 },
        pb: 8
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <Typography
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            top: '15%',
            left: '-5%',
            fontSize: { md: '20rem' },
            fontWeight: 900,
            color: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
            zIndex: 0,
            whiteSpace: 'nowrap',
            userSelect: 'none'
          }}
        >
          INSPIRE
        </Typography>
      </Box>

      <Container maxWidth='lg' sx={{ zIndex: 1 }}>
        <Stack spacing={4} alignItems='center' textAlign='center'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: '100px',
                border: `1px solid ${theme.palette.divider}`,
                bgcolor: isDarkMode
                  ? 'rgba(255,255,255,0.05)'
                  : 'rgba(0,0,0,0.05)',
                backdropFilter: 'blur(10px)',
                fontSize: '0.8rem',
                fontWeight: 600
              }}
            >
              ✨ The Future of Blogging is Here
            </Box>
          </motion.div>

          <motion.div
            initial='hidden'
            animate='visible'
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant='h1'
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.2rem', md: '5.5rem', sm: '3.5rem' },
                lineHeight: { xs: 1.2, md: 1 }
              }}
            >
              Where Ideas Get <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Digitally Inspired.
              </span>
            </Typography>
          </motion.div>

          <motion.div
            initial='hidden'
            animate='visible'
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              sx={{
                maxWidth: '600px',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                color: 'text.secondary'
              }}
            >
              A space for modern thinkers. We bridge the gap between creative
              storytelling and cutting-edge technology.
            </Typography>
          </motion.div>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ width: { xs: '100%', sm: 'auto' } }}
            component={motion.div}
            initial='hidden'
            animate='visible'
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant='contained'
              sx={{
                px: 5,
                py: 2,
                borderRadius: '15px',
                fontWeight: 700,
                bgcolor: '#6366f1'
              }}
              fullWidth={{ xs: true, sm: false }}
            >
              Start Reading
            </Button>
            <Button
              variant='outlined'
              sx={{ px: 5, py: 2, borderRadius: '15px', fontWeight: 700 }}
              fullWidth={{ xs: true, sm: false }}
            >
              Become a Writer
            </Button>
          </Stack>

          <Box
            sx={{
              position: 'relative',
              mt: 8,
              width: '100%',
              maxWidth: '900px'
            }}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 1,
                type: 'spring',
                bounce: 0.4
              }}
            >
              <Box
                component='img'
                src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200'
                sx={{
                  width: '100%',
                  borderRadius: '30px',
                  boxShadow: '0 50px 100px -20px rgba(0,0,0,0.25)',
                  border: `8px solid ${isDarkMode ? '#1e293b' : '#fff'}`
                }}
              />
            </motion.div>

            <Box
              component={motion.div}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              sx={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                p: 2,
                borderRadius: '20px',
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: { xs: 'none', md: 'block' }
              }}
            >
              <Typography variant='h6' fontWeight='900'>
                12k+
              </Typography>
              <Typography variant='caption'>Monthly Readers</Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
