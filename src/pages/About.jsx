import React from 'react'
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  useTheme
} from '@mui/material'

const About = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      sx={{
        pt: { xs: 10, md: 15 }, // Responsive padding top
        pb: 8,
        bgcolor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth='sm'>
        {/* HEADER SECTION */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography
            variant='overline'
            sx={{
              color: '#6366f1',
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: { xs: '0.7rem', md: '0.8rem' }
            }}
          >
            KNOW MORE
          </Typography>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 900,
              mt: 1,
              fontSize: { xs: '1.8rem', md: '2.125rem' } // Adjusting size for mobile
            }}
          >
            About INK SPIRE
          </Typography>
          <Box
            sx={{
              width: '40px',
              height: '3px',
              bgcolor: '#6366f1',
              mx: 'auto',
              mt: 2
            }}
          />
        </Box>

        {/* MAIN TEXT SECTION */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant='body1'
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
              color: 'text.primary',
              mb: 3
            }}
          >
            INK SPIRE is a simple and clean blog app. We created this platform
            for people who love reading without any distractions. Our goal is to
            share interesting stories about technology, design, and new ideas.
          </Typography>
          <Typography
            variant='body1'
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
              color: 'text.secondary'
            }}
          >
            We believe that a blog should be easy to use and beautiful to look
            at. That is why we focus on quality content and a minimalist design.
          </Typography>
        </Box>

        {/* FEATURE BOXES SECTION (Responsive Stack) */}
        <Stack spacing={3} sx={{ mb: 8 }}>
          {[
            {
              title: 'Quality Articles',
              desc: 'We write about AI, web design, and future tech. Every post is written to give you helpful information.'
            },
            {
              title: 'Clean Reading',
              desc: 'There are no messy ads or pop-ups here. You can focus only on the words and the story.'
            },
            {
              title: 'Dark & Light Mode',
              desc: 'You can switch between dark and light themes. This makes reading comfortable for your eyes at any time.'
            },
            {
              title: 'Easy to Use',
              desc: 'Our app is very fast and works perfectly on your mobile, tablet, or desktop computer.'
            }
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                p: { xs: 3, md: 4 }, // Responsive padding inside boxes
                textAlign: 'center',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '20px',
                bgcolor: isDark ? 'rgba(255,255,255,0.02)' : '#ffffff',
                transition: '0.3s',
                '&:hover': {
                  borderColor: '#6366f1',
                  boxShadow: isDark ? 'none' : '0 8px 24px rgba(0,0,0,0.05)'
                }
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 800,
                  color: '#6366f1',
                  mb: 1,
                  fontSize: '1.1rem'
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontSize: '0.9rem'
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Divider sx={{ mb: 6 }} />

        {/* FOUNDER SECTION */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: 'text.secondary',
              fontWeight: 700,
              textTransform: 'uppercase',
              mb: 0.5
            }}
          >
            Founder
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: 800, fontSize: '1rem' }}>
            Krishna Chavda
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default About
