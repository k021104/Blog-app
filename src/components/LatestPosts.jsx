import React from 'react'
import { Box, Container, Typography, IconButton, Button, Link } from '@mui/material'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { BLOG_DATA } from '../data'
import BlogCard from './BlogCard'

// Swiper CSS
import 'swiper/css'

const LatestPosts = () => {
  return (
    <Box
      sx={{
        py: { xs: 3, md: 6 },
        bgcolor: 'background.default',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth='lg'>
        {/* Header remains exactly like your old code */}
        <Box
          sx={{
            mb: 8,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}
        >
          <Box>
            <Typography
              variant='h2'
              sx={{
                fontWeight: 900,
                fontSize: { xs: '3rem', md: '4.5rem' },
                letterSpacing: '-2px',
                lineHeight: 1
              }}
            >
              Latest{' '}
              <span
                style={{
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontFamily: 'serif'
                }}
              >
                Stories
              </span>
            </Typography>
          </Box>

          {/* Custom Navigation Buttons */}
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <IconButton
              className='prev-btn'
              sx={{ border: '1px solid', borderColor: 'divider' }}
            >
              <ArrowBackIosNew fontSize='small' />
            </IconButton>
            <IconButton
              className='next-btn'
              sx={{ border: '1px solid', borderColor: 'divider' }}
            >
              <ArrowForwardIos fontSize='small' />
            </IconButton>
          </Box>
        </Box>

        {/* Swiper implementation for stability */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn'
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 5000 }}
          style={{ overflow: 'visible' }} // Taaki card lift (hover) effect cut na ho
        >
          {BLOG_DATA.map(post => (
            <SwiperSlide key={post.id} style={{ height: 'auto' }}>
              <Box sx={{ py: 4 }}>
                {' '}
                {/* Padding taaki hover lift effect visible rahe */}
                <BlogCard post={post} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Button after Swiper inside LatestPosts.jsx */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            component={Link}
            to='/news' 
            variant='outlined'
            sx={{
              borderRadius: '50px',
              px: 6,
              py: 1.5,
              fontWeight: 800,
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
                bgcolor: 'primary.main',
                color: 'white'
              }
            }}
          >
            View All Stories
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default LatestPosts
