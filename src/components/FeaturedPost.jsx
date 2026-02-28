import React from 'react'
import {
  Box,
  Typography,
  Container,
  Button,
  useTheme,
  Stack
} from '@mui/material'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const FeaturedPost = () => {
  const theme = useTheme()

  return (
    <Container maxWidth='xl' sx={{ py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Mobile pe stack, Desktop pe side-by-side
          borderRadius: '24px',
          overflow: 'hidden',
          bgcolor:
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.03)'
              : '#f8f9fa',
          border: '1px solid',
          borderColor: 'divider',
          height: { md: '380px' } // Fixed height for desktop
        }}
      >
        {/* Left Side: Image (Exactly 50% on desktop) */}
        <Box
          sx={{
            flex: 1,
            height: { xs: '250px', md: '100%' },
            overflow: 'hidden'
          }}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src='https://images.unsplash.com/photo-1498050108023-c5249f4df085'
            alt='Featured'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        {/* Right Side: Content (Exactly 50% on desktop) */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant='overline'
              sx={{ color: '#6366f1', fontWeight: 900, letterSpacing: 1 }}
            >
              Featured Story
            </Typography>

            <Typography
              variant='h4'
              sx={{
                fontWeight: 900,
                lineHeight: 1.2,
                fontSize: { xs: '1.8rem', md: '2.2rem' }
              }}
            >
              Mastering the Art of Minimalist Living
            </Typography>

            <Typography
              variant='body2'
              sx={{
                color: 'text.secondary',
                fontSize: '1rem',
                lineHeight: 1.6,
                display: '-webkit-box',
                WebkitLineClamp: 3, // Max 3 lines of text
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              Learn how to declutter your digital and physical workspace to
              boost productivity and find mental clarity in a busy world.
            </Typography>

            <Box>
              <Button
                variant='contained'
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: theme.palette.text.primary,
                  color: theme.palette.background.default,
                  borderRadius: '50px',
                  px: 4,
                  textTransform: 'none',
                  fontWeight: 700,
                  '&:hover': { bgcolor: '#6366f1' }
                }}
              >
                Read More
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

export default FeaturedPost
