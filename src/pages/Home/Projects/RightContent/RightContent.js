import React from 'react'

// MATERIAL UI CORES
import Grid from '@material-ui/core/Grid'

// STYELS
import useStyles from './rightContentUseStyles'

const RightContent = () => {
  const classes = useStyles()

  return (
    <Grid 
      item 
      xs={6}
    >
      <div className={classes['root']}>
        <div className={classes['placeholder']}/>
        <div className={classes['placeholder']}/>
      </div>
    </Grid>
  )
}

export default RightContent
