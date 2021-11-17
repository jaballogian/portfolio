import React from 'react'

// STYLES
import useStyles from './contentLeftUseStyles'

const ContentLeft = () => {
  const classes = useStyles()

  return (
    <div className={classes.contentLeftRoot}>
      Content Left
    </div>
  )
}

export default ContentLeft
