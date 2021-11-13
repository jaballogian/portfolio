import React from 'react'

// MATERIAL UI CORES
import Grid from '@mui/material/Grid'

// STYELS
import useStyles from './contentRightUseStyles'

const ContentRight = (props) => {
  const { content } = props

  const classes = useStyles()
  
  const imageType = content.imageType

  let root, placeholder
  if(imageType === 'mobile') {
    root = `${classes.contentRightRoot} ${classes.rootMobile}`
    placeholder = classes.placeholderMobile
  }
  else if(imageType === 'desktop') {
    root = `${classes.contentRightRoot} ${classes.rootDesktopOrOther}`
    placeholder = classes.placeholderDesktopOrOther
  }
  else if(imageType === 'other') {
    root = `${classes.contentRightRoot} ${classes.rootDesktopOrOther}`
    placeholder = classes.placeholderDesktopOrOther
  }

  return (
    <Grid 
      item 
      xs={12} lg={6}
    >
      <div className={root}>
        {content.imageList.map((item, index) => (
          <img 
            key={index}
            src={item} 
            alt='' 
            className={
              index === 0 ?
              placeholder :
              (imageType === 'mobile' ?
              `${placeholder} ${classes.secondPlaceholderPhone}` :
              `${placeholder} ${classes.secondPlaceholderDesktop}`)
            }
          />
        ))}
      </div>
    </Grid>
  )
}

export default ContentRight
