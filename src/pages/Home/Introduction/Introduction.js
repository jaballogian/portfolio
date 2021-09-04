import React from 'react'

// MATERIAL UI CORES
import Typography from '@material-ui/core/Typography'

// STYLES
import useStyles from './introductionUseStyles'

const Introduction = () => {
  const classes = useStyles()

  return (
    <div className={classes['root']}>
      {/* TITLE */}
      <Typography 
        variant='h1'
        className={classes['title']}
      >
        Hello, I'm <span className={classes['blueText']}>Jabal</span>
      </Typography>

      {/* CAPTION */}
      <Typography variant='h3'>
        A frontend developer, mobile application developer, and IoT engineer.
      </Typography>
    </div>
  )
}

export default Introduction
