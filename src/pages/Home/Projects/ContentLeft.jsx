import React from 'react'
import { Link } from 'react-router-dom'

// MATERIAL UI CORES
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './contentLeftUseStyles'

const ContentLeft = (props) => {
  const { content } = props

  const classes = useStyles()

  return (
    <div className={classes.contentLeftRoot}>
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
        className={classes.technologies}
      >
        {`Technologies: ${content.technologies}`}
      </Typography>
    
      {/* DESCRIPTION */}
      <Typography
        variant='h5'
        className={classes.description}
      >
        {content.description}
      </Typography>
      
      {/* EXPLORE MORE */}
      <Link 
        to={content.link}
        className={classes.linkText}
      >
        <Button 
          className={classes.exploreMoreContainer} 
          variant='contained'
        >
          <Typography
            variant='h5'
            className={classes.exploreMoreText}
          >
            Explore more
          </Typography>
        </Button>
      </Link>
    </div>
  )
}

export default ContentLeft
