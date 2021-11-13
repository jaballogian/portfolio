import React from 'react'

// MATERIAL UI CORES
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// STYELS
import styles from './rightContentUseStyles'

const RightContent = (props) => {
  const { content } = props
  
  const imageType = content.imageType

  let root, placeholder
  if(imageType === 'mobile') {
    root = `${styles.root} ${styles.rootMobile}`
    placeholder = styles.placeholderMobile
  }
  else if(imageType === 'desktop') {
    root = `${styles.root} ${styles.rootDesktopOrOther}`
    placeholder = styles.placeholderDesktopOrOther
  }
  else if(imageType === 'other') {
    root = `${styles.root} ${styles.rootDesktopOrOther}`
    placeholder = styles.placeholderDesktopOrOther
  }

  return (
    <Grid 
      item 
      xs={12} lg={6}
    >
      <Box sx={root}>
        {content.imageList.map((item, index) => (
          <Box
            component='img' 
            key={index}
            src={item} 
            alt='' 
            sx={
              index === 0 ?
              placeholder :
              (imageType === 'mobile' ?
              `${placeholder} ${styles.secondPlaceholderPhone}` :
              `${placeholder} ${styles.secondPlaceholderDesktop}`)
            }
          />
        ))}
      </Box>
    </Grid>
  )
}

export default RightContent
