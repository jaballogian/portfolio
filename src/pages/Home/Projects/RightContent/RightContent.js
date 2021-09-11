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
    placeholder = `${classes['placeholder']} ${classes['placeholderMobile']}`
  }
  else if(imageType === 'desktop') {
    root = `${classes['root']} ${classes['rootDesktopOrOther']}`
    placeholder = `${classes['placeholder']} ${classes['placeholderDesktopOrOther']}`
  }
  else if(imageType === 'other') {
    root = `${classes['root']} ${classes['rootDesktopOrOther']}`
    placeholder = `${classes['placeholder']} ${classes['placeholderDesktopOrOther']}`
  }

  return (
    <Grid 
      item 
      xs={6}
    >
      <div className={root}>
        <div className={placeholder}/>
        <div className={placeholder}/>
      </div>
    </Grid>
  )
}

export default RightContent
