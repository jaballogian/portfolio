import React from 'react'

// COMPONENTS
import TopContent from './TopContent/TopContent'
import BottomContent from './BottomContent/BottomContent'

// MATERIAL UI CORES
import Grid from '@material-ui/core/Grid'

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
      <div className={classes['root']}>
        <TopContent content={content}/>
        <BottomContent content={content}/>
      </div>
    </Grid>
  )
}

export default LeftContent
