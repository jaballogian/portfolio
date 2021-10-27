import React from 'react'

// MATERIAL UI CORES
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// STYLES
import styles from './topContentStyles'

const TopContent = (props) => {
  const { content } = props

  return (
    <Box sx={styles.topContainer}>
      {/* TITLE */}
      <Typography
        variant='h2'
        sx={styles.title}
      >
        {content.title}
      </Typography>

      {/* TYPE */}
      <Box sx={styles.typeContainer}>
        {content.type.map((item, index) => (
          <Box 
            key={index}
            sx={styles.typeItem}
          >
            <Typography
              variant='h4'
              sx={styles.typeText}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* TECHNOLOGIES */}
      <Typography
        variant='h4'
        sx={styles.technologies}
      >
        {`Technologies: ${content.technologies}`}
      </Typography>
    </Box>
  )
}

export default TopContent
