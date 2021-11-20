import React from 'react'
import { Link } from 'react-router-dom'

// IMAGES
import IllustrationNotFound from 'assets/images/illustrations/not_found.svg'

// MATERIAL UI CORES
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './notFoundUseStyles'

const NotFound = () => {
  const classes = useStyles()

  return (
    <div className={classes.notFoundRoot}>
      {/* CAPTION */}
      <Typography
        variant='h4'
        className={classes.caption}
      >
        404 Not Found
      </Typography>

      {/* TITLE */}
      <Typography
        variant='h3'
        className={classes.title}
      >
        Sorry, the page doesn't exist
      </Typography>

      {/* IMAGE */}
      <img
        src={IllustrationNotFound} 
        alt='' 
        className={classes.image}
      />

      {/* BUTTON */}
      <Link 
        to='/'
        className={classes.linkText}
      >
        <Button 
          className={classes.button} 
          variant='contained'
        >
          <Typography
            variant='h5'
            className={classes.buttonText}
          >
            Back to Home
          </Typography>
        </Button>
      </Link>
    </div>
  )
}

export default NotFound
