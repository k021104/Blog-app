import React from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
  Divider,
  useTheme
} from '@mui/material'
import {
  Instagram,
  Twitter,
  LinkedIn,
  GitHub,
  ArrowUpward
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const Footer = () => {
  const [showButton, setShowButton] = React.useState(false)
  const theme = useTheme()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      title: 'Explore',
      links: ['Articles', 'Tutorials', 'Daily News', 'Case Studies']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Open Source', 'Brand Assets', 'Community']
    },
    { title: 'Company', links: ['About Us', 'Contact', 'Careers', 'Privacy'] }
  ]

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        pt: 10,
        pb: 5,
        borderTop: `1px solid ${theme.palette.divider}`,
        width: '100%',
        position: 'relative'
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          justifyContent='space-between'
          spacing={{ xs: 6, md: 4 }}
        >
          {/* Column 1: Brand Identity */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ maxWidth: { md: '350px' } }}>
              <Typography
                variant='h4'
                sx={{ fontWeight: 900, letterSpacing: -2, mb: 3 }}
              >
                INK<span style={{ color: '#6366f1' }}>SPIRE</span>.
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: '1rem'
                }}
              >
                Architecting the future of digital storytelling through design,
                code, and visionary insights.
              </Typography>
              <Stack direction='row' spacing={2}>
                {[Instagram, Twitter, LinkedIn, GitHub].map((Icon, index) => (
                  <IconButton
                    key={index}
                    component={motion.button}
                    whileHover={{
                      y: -5,
                      backgroundColor: 'rgba(99,102,241,0.1)',
                      color: '#6366f1'
                    }}
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      width: 45,
                      height: 45,
                      transition: '0.3s'
                    }}
                  >
                    <Icon fontSize='small' />
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Dynamic Link Columns (Fills the Width) */}
          {footerLinks.map(section => (
            <Grid item xs={6} sm={4} md={2} key={section.title}>
              <Typography
                variant='subtitle1'
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  textTransform: 'uppercase',
                  letterSpacing: 1.5,
                  fontSize: '0.8rem',
                  color: 'primary.main'
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={2}>
                {section.links.map(link => (
                  <Link
                    key={link}
                    href='#'
                    underline='none'
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.95rem',
                      width: 'fit-content',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'text.primary',
                        transform: 'translateX(8px)'
                      }
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}

          {/* Column 4: Original Premium Back to Top Button */}
          {showButton && (
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                textAlign: { md: 'right' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'flex-start', md: 'flex-end' }
              }}
            >
              <Typography variant='subtitle1' sx={{ fontWeight: 900, mb: 3 }}>
                Back to top
              </Typography>
              <IconButton
                onClick={scrollToTop}
                component={motion.button}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                sx={{
                  width: 70,
                  height: 70, // Original Big Size
                  bgcolor: 'primary.main',
                  color: '#fff',
                  '&:hover': { bgcolor: 'primary.dark' },
                  boxShadow: '0 15px 30px rgba(99, 102, 241, 0.4)', // Premium Shadow
                  transition: '0.3s ease'
                }}
              >
                <ArrowUpward fontSize='large' />
              </IconButton>
            </Grid>
          )}
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, opacity: 0.5 }} />

        {/* Bottom Metadata */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography
            variant='caption'
            sx={{ color: 'text.secondary', fontWeight: 500 }}
          >
            © 2026 INK SPIRE JOURNAL. All rights reserved.
          </Typography>
          <Stack direction='row' spacing={4}>
            <Link
              href='#'
              variant='caption'
              color='text.secondary'
              underline='hover'
            >
              Privacy Policy
            </Link>
            <Link
              href='#'
              variant='caption'
              color='text.secondary'
              underline='hover'
            >
              Terms of Service
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
