import React from 'react'

// STYLES
import useStyles from './footerUseStyles'

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerRoot}>
      Footer
    </div>
  )
}

export default Footer
