import React from 'react'

// COMPONENTS
import TopContent from './TopContent'
import BottomContent from './BottomContent'

// MATERIAL UI CORES
import Grid from '@mui/material/Grid'

// STYLES
import useStyles from './leftContentUseStyles'

const LeftContent = (props) => {
  const { content } = props

  const classes = useStyles()

  return (
    <Grid 
      item 
      xs={12} lg={6}
    >
      <div className={classes.leftContentRoot}>
        <TopContent content={content}/>
        <BottomContent content={content}/>
      </div>
    </Grid>
  )
}

export default LeftContent
