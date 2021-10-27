import React from 'react'

// MATERIAL UI CORES
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// STYLES
import styles from './introductionStyles'

const Introduction = () => {
  return (
    <Box sx={styles.root}>
      {/* TITLE */}
      <Typography 
        variant='h1'
        sx={styles.title}
      >
        Hello, I'm <span sx={styles.blueText}>Jabal</span>
      </Typography>

      {/* CAPTION */}
      <Typography variant='h3'>
        A frontend developer, mobile application developer, and IoT engineer.
      </Typography>
    </Box>
  )
}

export default Introduction
