import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import BackgroundText from 'components/BackgroundText/BackgroundText'

// CONTEXTS
import { AllPagesContext } from 'contexts/AllPagesContext'

// IMAGES
import IllustrationNotFound from 'assets/images/illustrations/not_found.svg'

// MATERIAL UI CORES
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './notFoundUseStyles'

const NotFound = () => {
  const { breakpointType } = useContext(AllPagesContext)

  const classes = useStyles()

  return (
    <div className={classes.notFoundRoot}>
      <div className={classes.captionAndTitleRoot}>
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
      </div>

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

      {/* BACKGROUND TEXT */}
      <BackgroundText
        text='PAGE NOT FOUND'
        className={classes.backgroundText}
        noWrap={breakpointType === 'xs' ? false : true}
        textVariant='h1'
      />
    </div>
  )
}

export default NotFound
