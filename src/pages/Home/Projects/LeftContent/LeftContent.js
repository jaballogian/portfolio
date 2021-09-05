import React from 'react'

// COMPONENTS
import TopContent from './TopContent/TopContent'
import BottomContent from './BottomContent/BottomContent'

// MATERIAL UI CORES
import Grid from '@material-ui/core/Grid'

// STYLES
import useStyles from './leftContentUseStyles'

const LeftContent = () => {
  const classes = useStyles()

  return (
    <Grid 
      item 
      xs={6}
    >
      <div className={classes['root']}>
        <TopContent/>
        <BottomContent/>
      </div>
    </Grid>
  )
}

export default LeftContent
