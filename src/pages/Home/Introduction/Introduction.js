import React from 'react'

// MATERIAL UI CORES
import Typography from '@material-ui/core/Typography'

// STYLES
import useStyles from './introductionUseStyles'

const Introduction = () => {
  const classes = useStyles()

  const caption = 'A frontend developer, mobile application developer,\nand IoT engineer.'

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
      {caption.split('\n').map((item, index) => (
        <Typography 
          key={index}
          variant='h3'
        >
          {item}
        </Typography>
      ))}
    </div>
  )
}

export default Introduction
