import React from 'react'

// MATERIAL UI CORES
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './footerUseStyles'

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerRoot}>
      {/* TITLE */}
      <Typography 
        variant='subtitle1'
        className={classes.title}
      >
        This website is designed and created by me, Jabal Logian
      </Typography>

      {/* COPYRIGHT */}
      <Typography
        variant='subtitle1'
        className={classes.copyright}
      >
        Copyright © 2021 Jabal Logian
      </Typography>
    </div>
  )
}

export default Footer
