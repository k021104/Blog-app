import { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Topics from './pages/Topics'
import Newsletter from './pages/Newsletter'
import About from './pages/About'

function App () {
  const [mode, setMode] = useState('light')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: { main: '#6366f1' },
          background: {
            default: mode === 'light' ? '#ffffff' : '#0a0a0a',
            paper: mode === 'light' ? '#f5f5f5' : '#111111'
          }
        },
        typography: {
          fontFamily: "'Inter', sans-serif"
        }
      }),
    [mode]
  )

  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar toggleColorMode={toggleColorMode} mode={mode} />

      <Box component='main' sx={{ minHeight: '80vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/topics' element={<Topics />} />
          <Route path='/news' element={<Newsletter />} />
          <Route path='/about' element={<About />} />
          <Route
            path='/create'
            element={
              <Box sx={{ pt: 15, textAlign: 'center' }}>
                <h1>Create Post Editor</h1>
              </Box>
            }
          />
        </Routes>
      </Box>

      <Footer />
    </ThemeProvider>
  )
}

export default App
