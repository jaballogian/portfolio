import React from 'react'

// STYLES
import useStyles from './beingDevelopedUseStyles'

const BeingDeveloped = () => {
  const classes = useStyles()

  return (
    <div className={classes['root']}>
      Being Developed
    </div>
  )
}

export default BeingDeveloped
