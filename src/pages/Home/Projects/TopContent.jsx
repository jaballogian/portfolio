import React from 'react'

// MATERIAL UI CORES
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './topContentUseStyles'

const TopContent = (props) => {
  const { content } = props

  const classes = useStyles()

  return (
    <div className={classes.topContainer}>
      {/* TITLE */}
      <Typography
        variant='h2'
        className={classes.title}
      >
        {content.title}
      </Typography>

      {/* TYPE */}
      <div className={classes.typeContainer}>
        {content.type.map((item, index) => (
          <div 
            key={index}
            className={classes.typeItem}
          >
            <Typography
              variant='h4'
              className={classes.typeText}
            >
              {item}
            </Typography>
          </div>
        ))}
      </div>

      {/* TECHNOLOGIES */}
      <Typography
        variant='h4'
        className={classes.technologies}
      >
        {`Technologies: ${content.technologies}`}
      </Typography>
    </div>
  )
}

export default TopContent
