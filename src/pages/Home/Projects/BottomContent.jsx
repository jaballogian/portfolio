import React from 'react'
import { Link } from 'react-router-dom'

// MATERIAL UI CORES
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// STYLES
import styles from './bottomContentUseStyles'

const BottomContent = (props) => {
  const { content } = props

  return (
    <Box sx={styles.bottomContainer}>
      {/* DESCRIPTION */}
      <Typography
        variant='h4'
        sx={styles.description}
      >
        {content.description}
      </Typography>
      
      {/* EXPLORE MORE */}
      <Link 
        to={content.link}
        sx={styles.linkText}
      >
        <Button 
          sx={styles.exploreMoreContainer} 
          variant='contained'
        >
          <Typography
            variant='h4'
            sx={styles.exploreMoreText}
          >
            Explore more
          </Typography>
        </Button>
      </Link>
    </Box>
  )
}

export default BottomContent
