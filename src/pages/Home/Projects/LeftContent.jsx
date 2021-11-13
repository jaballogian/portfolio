import React from 'react'

// COMPONENTS
import TopContent from './TopContent'
import BottomContent from './BottomContent'

// MATERIAL UI CORES
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// STYLES
import styles from './leftContentUseStyles'

const LeftContent = (props) => {
  const { content } = props

  return (
    <Grid 
      item 
      xs={12} lg={6}
    >
      <Box sx={styles.root}>
        <TopContent content={content}/>
        <BottomContent content={content}/>
      </Box>
    </Grid>
  )
}

export default LeftContent
