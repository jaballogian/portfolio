import React from 'react'

// STYELS
import useStyles from './contentRightUseStyles'

const ContentRight = (props) => {
  const { content } = props

  const classes = useStyles()
  
  const imageType = content.imageType

  let placeholderRoot, placeholder
  if(imageType === 'mobile') {
    placeholderRoot = classes.rootMobile
    placeholder = classes.placeholderMobile
  }
  else if(imageType === 'desktop') {
    placeholderRoot = classes.rootDesktopOrOther
    placeholder = classes.placeholderDesktopOrOther
  }
  else if(imageType === 'other') {
    placeholderRoot = classes.rootDesktopOrOther
    placeholder = classes.placeholderDesktopOrOther
  }

  return (
    <div className={classes.contentRightRoot}>
      <div className={placeholderRoot}>
        {/* {content.imageList.map((item, index) => (
          <img 
            key={index}
            src={item} 
            alt='' 
            className={placeholder}
          />
        ))} */}
      </div>
    </div>
  )
}

export default ContentRight
