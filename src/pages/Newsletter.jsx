import React from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  useTheme
} from '@mui/material'
import { motion } from 'framer-motion'
import SendIcon from '@mui/icons-material/Send'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

const Newsletter = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 20 }, // Responsive top padding
        pb: { xs: 8, md: 10 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflowX: 'hidden'
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Vertical on mobile, Horizontal on desktop
            gap: { xs: 6, md: 10 }, // More breathing room for mobile stacking
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' } // Centered text for mobile
          }}
        >
          {/* LEFT: The Hook & Form */}
          <Box sx={{ flex: 1.2, width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant='overline'
                sx={{
                  color: '#6366f1',
                  fontWeight: 900,
                  letterSpacing: { xs: 2, md: 4 },
                  fontSize: { xs: '0.75rem', md: '0.9rem' }
                }}
              >
                STAY INSPIRED
              </Typography>
              <Typography
                variant='h2'
                sx={{
                  fontWeight: 900,
                  mt: { xs: 1, md: 2 },
                  mb: 3,
                  letterSpacing: '-2px',
                  lineHeight: { xs: 1.1, md: 1 },
                  fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.5rem' } // Fluid typography
                }}
              >
                The Sunday <br />{' '}
                <span style={{ color: '#6366f1' }}>Briefing.</span>
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  color: 'text.secondary',
                  mb: 5,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  maxWidth: { xs: '100%', md: '480px' },
                  mx: { xs: 'auto', md: 0 } // Center text block on mobile
                }}
              >
                Join 5,000+ creatives and tech enthusiasts. No spam, just pure
                signal delivered to your inbox every weekend.
              </Typography>

              {/* Minimalist Form */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }} // Button stacks on very small mobile
                spacing={2}
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: '550px' },
                  mx: { xs: 'auto', md: 0 }
                }}
              >
                <TextField
                  fullWidth
                  placeholder='yourname@email.com'
                  variant='standard'
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#f5f5f5',
                      px: 3,
                      py: { xs: 1.5, md: 2 },
                      borderRadius: '50px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: '0.3s',
                      '&:focus-within': { borderColor: '#6366f1' }
                    }
                  }}
                />
                <Button
                  variant='contained'
                  endIcon={<SendIcon />}
                  sx={{
                    bgcolor: '#6366f1',
                    color: 'white',
                    px: { xs: 4, md: 5 },
                    py: { xs: 1.5, md: 2 },
                    borderRadius: '50px',
                    fontWeight: 800,
                    textTransform: 'none',
                    fontSize: '1rem',
                    boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)',
                    whiteSpace: 'nowrap',
                    '&:hover': { bgcolor: '#4f46e5' }
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
              <Typography
                variant='caption'
                sx={{
                  display: 'block',
                  mt: 2,
                  opacity: 0.5,
                  fontSize: '0.75rem'
                }}
              >
                Join the circle. Unsubscribe anytime.
              </Typography>
            </motion.div>
          </Box>

          {/* RIGHT: The Perks (Visual List) */}
          <Box sx={{ flex: 0.8, width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  p: { xs: 3, sm: 4, md: 6 }, // Smaller padding on mobile
                  borderRadius: { xs: '30px', md: '40px' },
                  bgcolor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: isDark ? 'none' : '0 30px 60px rgba(0,0,0,0.05)',
                  textAlign: 'left' // Perks always left-aligned for readability
                }}
              >
                <Typography
                  variant='h5'
                  sx={{
                    fontWeight: 900,
                    mb: 4,
                    fontSize: { xs: '1.2rem', md: '1.5rem' }
                  }}
                >
                  What's inside?
                </Typography>

                {[
                  {
                    title: 'Exclusive Insights',
                    desc: 'Weekly trends in AI & Minimalism.'
                  },
                  {
                    title: 'Early Access',
                    desc: 'Read premium stories before everyone else.'
                  },
                  {
                    title: 'Curated Links',
                    desc: 'The best resources we found on the web.'
                  }
                ].map((item, index) => (
                  <Stack key={index} direction='row' spacing={2} sx={{ mb: 4 }}>
                    <Box
                      sx={{
                        color: '#6366f1',
                        mt: 0.2,
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}
                    >
                      <CheckCircleOutlineIcon sx={{ fontSize: '1.4rem' }} />
                    </Box>
                    <Box>
                      <Typography
                        variant='subtitle1'
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                          lineHeight: 1.2
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{
                          color: 'text.secondary',
                          mt: 0.5,
                          fontSize: '0.85rem'
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Newsletter
