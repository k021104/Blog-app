import React from 'react'
import Newsletter from '../components/Newsletter'
import Hero from '../components/Hero'
import LatestPosts from '../components/LatestPosts'
import TrendingTopics from '../components/TrendingTopics'
import FeaturedPost from '../components/FeaturedPost'

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingTopics />
      <FeaturedPost />
      <LatestPosts />
      <Newsletter />
    </>
  )
}

export default Home
