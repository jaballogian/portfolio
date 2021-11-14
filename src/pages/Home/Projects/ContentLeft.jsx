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
      <div className={classes.contentLeftContainer}>
        {/* TITLE */}
        <Typography
          variant='h3'
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
                variant='h5'
                className={classes.typeText}
              >
                {item}
              </Typography>
            </div>
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
    </div>
  )
}

export default ContentLeft
