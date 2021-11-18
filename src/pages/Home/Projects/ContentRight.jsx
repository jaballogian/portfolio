import React from 'react'
import PropTypes from 'prop-types'

// STYELS
import useStyles from './contentRightUseStyles'

const imageTypeList = [
  'mobile',
  'desktop',
  'other',
]

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
        {content.imageList.map((item, index) => (
          <img 
            key={index}
            src={item} 
            alt='' 
            className={placeholder}
          />
        ))}
      </div>
    </div>
  )
}

ContentRight.defaultProps = {
}

ContentRight.propTypes = {
  content: PropTypes.shape({
    imageType: PropTypes.oneOf(imageTypeList).isRequired,
    imageList: PropTypes.array.isRequired,
  }).isRequired,
}

export default ContentRight
