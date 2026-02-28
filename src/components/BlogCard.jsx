import React from 'react'
import { Box, Typography, Avatar, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' // Navigation ke liye

const BlogCard = ({ post }) => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Link
      to={`/post/${post.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <motion.div
        whileHover={{
          y: -15,
          rotate: 1,
          transition: { type: 'spring', stiffness: 300, damping: 15 }
        }}
        style={{ width: '100%', cursor: 'pointer' }}
      >
        <Box
          sx={{
            position: 'relative',
            height: { xs: '450px', md: '550px' },
            p: { xs: 3, md: 5 },
            borderRadius: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            overflow: 'hidden',
            bgcolor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
            border: `1px solid ${
              isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'
            }`,
            backdropFilter: 'blur(20px)',
            boxShadow: isDark
              ? '0 30px 60px rgba(0,0,0,0.4)'
              : '0 30px 60px rgba(0,0,0,0.05)'
          }}
        >
          {/* Floating Circle Image */}
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              right: -20,
              width: { xs: '220px', md: '280px' },
              height: { xs: '220px', md: '280px' },
              borderRadius: '50%',
              overflow: 'hidden',
              zIndex: 0,
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>

          {/* CONTENT Section */}
          <Box sx={{ zIndex: 1 }}>
            <Typography
              variant='caption'
              sx={{
                color: '#6366f1',
                fontWeight: 900,
                bgcolor: 'rgba(99,102,241,0.1)',
                px: 2,
                py: 1,
                borderRadius: '15px'
              }}
            >
              {post.category}
            </Typography>

            <Typography
              variant='h3'
              sx={{
                fontWeight: 900,
                mt: 3,
                mb: 3,
                lineHeight: 1.1,
                fontSize: { xs: '1.6rem', md: '2.2rem' }
              }}
            >
              {post.title}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  src={post.authorImg}
                  sx={{ width: 40, height: 40, border: '2px solid #6366f1' }}
                />
                <Box>
                  <Typography variant='subtitle2' fontWeight={900}>
                    {post.author}
                  </Typography>
                  <Typography variant='caption' sx={{ opacity: 0.5 }}>
                    {post.readTime} Read
                  </Typography>
                </Box>
              </Box>

              {/* Minimal View Button / Arrow */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: '0.3s',
                  '&:hover': {
                    bgcolor: '#6366f1',
                    color: 'white',
                    borderColor: '#6366f1'
                  }
                }}
              >
                →
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Link>
  )
}

export default BlogCard
