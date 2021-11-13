import React from 'react'
import { Link } from 'react-router-dom'

// MATERIAL UI CORES
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './bottomContentUseStyles'

const BottomContent = (props) => {
  const { content } = props

  const classes = useStyles()

  return (
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
  )
}

export default BottomContent
