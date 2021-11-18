import React from 'react'
import PropTypes from 'prop-types'

// STYLES
import useStyles from './contentLeftUseStyles'

const ContentLeft = (props) => {
  const { content } = props

  const classes = useStyles()

  let placeholderRoot, placeholder

  return (
    <div className={classes.contentLeftRoot}>
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

ContentLeft.defaultProps = {
}

ContentLeft.propTypes = {
  content: PropTypes.shape({
    imageList: PropTypes.array.isRequired,
  }).isRequired,
}

export default ContentLeft
