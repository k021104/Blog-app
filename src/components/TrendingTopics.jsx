import React from 'react';
import { Box, Typography, Container, Stack, Link } from '@mui/material';
import { motion } from 'framer-motion';

const topics = ["Technology", "Design", "AI", "Minimalism", "Dev", "Business", "Lifestyle"];

const TrendingTopics = () => {
  return (
    <Box sx={{ borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider', py: 4, mt: 6, mb: 3, overflow: 'hidden', bgcolor: 'background.default' }}>
      <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center' }}>
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ zIndex: 10, bgcolor: 'background.default', pr: 4 }}>
          <Box 
            component={motion.div}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            sx={{ width: 8, height: 8, bgcolor: '#6366f1', borderRadius: '50%', boxShadow: '0 0 10px #6366f1' }}
          />
          <Typography variant="caption" sx={{ fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Trending
          </Typography>
        </Stack>

        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
          <motion.div
            animate={{ x: [0, -800] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
            style={{ display: 'flex', gap: '60px', whiteSpace: 'nowrap' }}
          >
            {[...topics, ...topics].map((topic, i) => (
              <Typography 
                key={i} 
                component={motion.div}
                whileHover={{ y: -3, color: '#6366f1' }} // Yahan Hover Effect add kiya hai
                sx={{ 
                  fontWeight: 700, 
                  color: 'text.secondary', 
                  cursor: 'pointer', 
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease' 
                }}
              >
                #{topic}
              </Typography>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingTopics;