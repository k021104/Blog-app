import React, { useState } from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { BLOG_DATA } from '../data'

const categories = [
  'All',
  'Technology',
  'Design',
  'AI',
  'Minimalism',
  'Lifestyle'
]

const Topics = () => {
  const theme = useTheme()
  const [activeTopic, setActiveTopic] = useState('All')

  const filteredPosts =
    activeTopic === 'All'
      ? BLOG_DATA
      : BLOG_DATA.filter(post => post.category === activeTopic)

  return (
    <Box
      sx={{
        pt: { xs: 10, sm: 12, md: 18 }, // Responsive padding top
        pb: 10,
        bgcolor: 'background.default',
        minHeight: '100vh',
        overflowX: 'hidden' // Mobile horizontal scroll prevention
      }}
    >
      <Container maxWidth='lg'>
        {/* 1. Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography
            variant='overline'
            sx={{
              color: '#6366f1',
              fontWeight: 900,
              letterSpacing: { xs: 2, md: 4 },
              fontSize: { xs: '0.7rem', md: '0.85rem' }
            }}
          >
            EXPLORE ARCHIVE
          </Typography>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 900,
              mt: 1,
              letterSpacing: '-1px',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } // Fluid Typography
            }}
          >
            Browse by <span style={{ color: '#6366f1' }}>Topic</span>
          </Typography>
        </Box>

        {/* 2. Topic Links (Fully Responsive & Scrollable on Mobile) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', sm: 'center' }, // Mobile par left align for scroll
            flexWrap: { xs: 'nowrap', sm: 'wrap' }, // Mobile par wrap nahi hoga scroll hoga
            overflowX: { xs: 'auto', sm: 'visible' }, // Swipeable on mobile
            gap: { xs: 3, md: 5 },
            mb: { xs: 6, md: 10 },
            pb: { xs: 2, sm: 0 }, // Extra padding for scroll visibility
            '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {categories.map(cat => (
            <Typography
              key={cat}
              onClick={() => setActiveTopic(cat)}
              sx={{
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: { xs: '0.9rem', md: '1rem' },
                whiteSpace: 'nowrap', // Mobile par text break na ho
                color: activeTopic === cat ? 'text.primary' : 'text.secondary',
                borderBottom: '2px solid',
                borderColor: activeTopic === cat ? '#6366f1' : 'transparent',
                pb: 0.5,
                transition: '0.3s',
                '&:hover': { color: '#6366f1' }
              }}
            >
              {cat}
            </Typography>
          ))}
        </Box>

        {/* 3. RESPONSIVE FLEX GRID */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start', // Start se align karein
            gap: { xs: 3, md: 4 }, // Gap for different screens
            width: '100%'
          }}
        >
          <AnimatePresence mode='popLayout'>
            {filteredPosts.map(post => (
              <Box
                key={post.id}
                sx={{
                  // XS: 100%, SM: 48%, MD: 31% approx
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 12px)', // 2 cards minus gap
                    md: 'calc(33.33% - 27px)' // 3 cards minus gap
                  },
                  display: 'flex'
                }}
              >
                <TopicCard post={post} />
              </Box>
            ))}
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  )
}

const TopicCard = ({ post }) => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover='cardHover'
      style={{ width: '100%', cursor: 'pointer', display: 'flex' }}
    >
      <Box
        sx={{
          width: '100%',
          borderRadius: { xs: '20px', md: '30px' }, // Mobile par thoda kam round
          p: { xs: 2.5, md: 3 }, // Better mobile padding
          bgcolor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
          border: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#6366f1',
            boxShadow: isDark
              ? '0 10px 30px rgba(0,0,0,0.5)'
              : '0 10px 30px rgba(0,0,0,0.05)'
          }
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: '180px', sm: '200px', md: '220px' },
            borderRadius: '20px',
            overflow: 'hidden',
            mb: 2.5
          }}
        >
          <img
            src={post.image}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        <Typography
          variant='caption'
          sx={{
            color: '#6366f1',
            fontWeight: 900,
            textTransform: 'uppercase',
            mb: 1,
            fontSize: '0.7rem'
          }}
        >
          {post.category} • {post.readTime}
        </Typography>

        <Typography
          variant='h5'
          sx={{
            fontWeight: 900,
            mb: 3,
            flexGrow: 1,
            lineHeight: 1.3,
            fontSize: { xs: '1.2rem', md: '1.5rem' } // Mobile optimized title
          }}
        >
          {post.title}
        </Typography>

        <Box
          sx={{
            pt: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            variant='subtitle2'
            sx={{ fontWeight: 800, opacity: 0.8, fontSize: '0.8rem' }}
          >
            {post.author}
          </Typography>

          <Box
            sx={{
              width: { xs: 38, md: 45 },
              height: { xs: 38, md: 45 },
              borderRadius: '50%',
              bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <motion.span
              variants={{ cardHover: { x: 40, opacity: 0 } }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                fontSize: '1.2rem',
                color: isDark ? '#fff' : '#000',
                position: 'absolute'
              }}
            >
              →
            </motion.span>

            <motion.span
              variants={{ cardHover: { x: 0, opacity: 1 } }}
              initial={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                fontSize: '1.2rem',
                color: '#6366f1',
                position: 'absolute'
              }}
            >
              →
            </motion.span>
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}

export default Topics
