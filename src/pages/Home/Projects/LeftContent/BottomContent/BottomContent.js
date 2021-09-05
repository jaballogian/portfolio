import React from 'react'

// MATERIAL UI CORES
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// STYLES
import useStyles from './bottomContentUseStyles'

const BottomContent = () => {
  const classes = useStyles()

  const description = '(Short project description): Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

  return (
    <div className={classes['bottomContainer']}>
      {/* DESCRIPTION */}
      <Typography
        variant='h4'
        className={classes['description']}
      >
        {description}
      </Typography>
      
      {/* EXPLORE MORE */}
      <Button 
        className={classes['exploreMoreContainer']} 
        variant='contained'
      >
        <Typography
          variant='h4'
          className={classes['exploreMoreText']}
        >
          Explore more
        </Typography>
      </Button>
    </div>
  )
}

export default BottomContent
