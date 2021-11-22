import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import BackgroundText from 'components/BackgroundText/BackgroundText'

// CONTEXTS
import { AllPagesContext } from 'contexts/AllPagesContext'

// IMAGES
import IllustrationBeingDeveloped from 'assets/images/illustrations/being_developed.svg'

// MATERIAL UI CORES
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './beingDevelopedUseStyles'

const BeingDeveloped = () => {
  const { breakpointType } = useContext(AllPagesContext)

  const classes = useStyles()
  
  return (
    <div className={classes.beingDevelopedRoot}>
      <div className={classes.captionAndTitleRoot}>
        {/* TITLE */}
        <Typography
          variant='h2'
          className={classes.title}
        >
          Sorry, I’m still working on this section
        </Typography>
        
        {/* CAPTION */}
        <Typography
          variant='h4'
          className={classes.caption}
        >
          Please come back later
        </Typography>
      </div>

      {/* IMAGE */}
      <img
        src={IllustrationBeingDeveloped} 
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
            variant='h4'
            className={classes.buttonText}
          >
            Back to Home
          </Typography>
        </Button>
      </Link>

      {/* BACKGROUND TEXT */}
      <BackgroundText
        text='BEING DEVELOPED'
        className={classes.backgroundText}
        noWrap={breakpointType === 'xs' ? false : true}
        textVariant='h1'
      />
    </div>
  )
}

export default BeingDeveloped
