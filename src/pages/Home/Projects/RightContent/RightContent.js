import React from 'react'

// MATERIAL UI CORES
import Grid from '@material-ui/core/Grid'

// STYELS
import useStyles from './rightContentUseStyles'

const RightContent = (props) => {
  const { content } = props

  const classes = useStyles()
  
  const imageType = content['imageType']

  let root, placeholder
  if(imageType === 'mobile') {
    root = `${classes['root']} ${classes['rootMobile']}`
    placeholder = classes['placeholderMobile']
  }
  else if(imageType === 'desktop') {
    root = `${classes['root']} ${classes['rootDesktopOrOther']}`
    placeholder = classes['placeholderDesktopOrOther']
  }
  else if(imageType === 'other') {
    root = `${classes['root']} ${classes['rootDesktopOrOther']}`
    placeholder = classes['placeholderDesktopOrOther']
  }

  return (
    <Grid 
      item 
      xs={12} lg={6}
    >
      <div className={root}>
        {content['imageList'].map((item, index) => (
          <img 
            key={index}
            src={item} 
            alt='' 
            className={
              index === 0 ?
              placeholder :
              `${placeholder} ${classes['secondPlaceholderPhone']}`
            }
          />
        ))}
      </div>
    </Grid>
  )
}

export default RightContent
