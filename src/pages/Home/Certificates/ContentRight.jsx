import React from 'react'

// MATERIAL UI CORES
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './contentRightUseStyles'

const ContentRight = (props) => {
  const { content } = props

  const classes = useStyles()

  return (
    <div className={classes.contentRightRoot}>
      {/* TITLE */}
      <Typography
        variant='h3'
        className={classes.title}
      >
        {content.title}
      </Typography>

      {/* TYPE */}
      <div className={classes.typeContainer}>
        {content.typeList.map((item, index) => (
          <Typography
            key={index}
            variant='h5'
            className={classes.typeItem}
          >
            {item}
          </Typography>
        ))}
      </div>

      {/* TECHNOLOGIES */}
      <Typography
        variant='h5'
        className={classes.providers}
      >
        {`From: ${content.providers}`}
      </Typography>
    
      {/* DESCRIPTION */}
      <Typography
        variant='h5'
        className={classes.description}
      >
        {content.description}
      </Typography>
    </div>
  )
}

export default ContentRight
