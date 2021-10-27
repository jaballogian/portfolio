import React from 'react'
import { Link } from 'react-router-dom'

// MATERIAL UI CORES
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// IMAGES
import IllustrationBeingDeveloped from 'assets/images/illustrations/being_developed.svg'

// STYLES
import styles from './beingDevelopedStyles'

const BeingDeveloped = () => {
  return (
    <Box sx={styles.root}>
      {/* TITLE */}
      <Typography
        variant='h2'
        sx={styles.title}
      >
        Sorry, I’m still working on this section
      </Typography>

      {/* IMAGE */}
      <Box
        component='img' 
        src={IllustrationBeingDeveloped} 
        alt='' 
        sx={styles.image}
      />

      {/* BUTTON */}
      <Link 
        to='/'
        sx={styles.linkText}
      >
        <Button 
          sx={styles.button} 
          variant='contained'
        >
          <Typography
            variant='h4'
            sx={styles.buttonText}
          >
            Back to Home
          </Typography>
        </Button>
      </Link>
    </Box>
  )
}

export default BeingDeveloped
