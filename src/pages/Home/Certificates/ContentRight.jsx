import React from 'react'

// STYLES
import useStyles from './contentRightUseStyles'

const ContentRight = () => {
  const classes = useStyles()

  return (
    <div className={classes.contentRightRoot}>
      Content Right
    </div>
  )
}

export default ContentRight
