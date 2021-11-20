import React from 'react'
import PropTypes from 'prop-types'

// STYLES
import useStyles from './contentLeftUseStyles'

const ContentLeft = (props) => {
  const { content } = props

  const classes = useStyles()

  return (
    <div className={classes.contentLeftRoot}>
      <div className={classes.placeholderRoot}>
        {content.imageList.map((item, index) => (
          <img 
            key={index}
            src={item} 
            alt='' 
            className={
              content.imageList.length === 1 ? 
              classes.placeholder :
              `${classes.placeholder} ${classes.placeholderMultiple}`
            }
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
