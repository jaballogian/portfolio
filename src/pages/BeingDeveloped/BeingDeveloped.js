import React from 'react'
import { Link } from 'react-router-dom'

// MATERIAL UI CORES
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// IMAGES
import IllustrationBeingDeveloped from '../../assets/images/illustrations/being_developed.svg'

// STYLES
import useStyles from './beingDevelopedUseStyles'

const BeingDeveloped = () => {
  const classes = useStyles()

  return (
    <div className={classes['root']}>
      {/* TITLE */}
      <Typography
        variant='h2'
        className={classes['title']}
      >
        Sorry, I’m still working on this section
      </Typography>

      <div className={classes['imageAndButtonContainer']}>
        {/* BUTTON */}
        <Link 
          to='/'
          className={classes['linkText']}
        >
          <Button 
            className={classes['button']} 
            variant='contained'
          >
            <Typography
              variant='h4'
              className={classes['buttonText']}
            >
              Back to Home
            </Typography>
          </Button>
        </Link>

        {/* IMAGE */}
        <img 
          src={IllustrationBeingDeveloped} 
          alt='' 
          className={classes['image']}
        />
      </div>
    </div>
  )
}

export default BeingDeveloped
