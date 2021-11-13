import React from 'react'
import { Link } from 'react-router-dom'

// MATERIAL UI CORES
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './contentLeftUseStyles'

const ContentLeft = (props) => {
  const { content } = props

  const classes = useStyles()

  return (
    <Grid 
      item 
      xs={12} lg={6}
    >
      <div className={classes.contentLeftRoot}>
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
        
        <div className={classes.bottomContentRoot}>
          {/* DESCRIPTION */}
          <Typography
            variant='h4'
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
                variant='h4'
                className={classes.exploreMoreText}
              >
                Explore more
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </Grid>
  )
}

export default ContentLeft
