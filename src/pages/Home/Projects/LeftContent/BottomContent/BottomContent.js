import React from 'react'

// MATERIAL UI CORES
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// STYLES
import useStyles from './bottomContentUseStyles'

const BottomContent = (props) => {
  const { content } = props

  const classes = useStyles()

  return (
    <div className={classes['bottomContainer']}>
      {/* DESCRIPTION */}
      <Typography
        variant='h4'
        className={classes['description']}
      >
        {content['description']}
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
