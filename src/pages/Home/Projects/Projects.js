import React from 'react'

// COMPONENTS (SORTED BY ORDER)
import LeftContent from './LeftContent/LeftContent'
import RightContent from './RightContent/RightContent'
import CustomPagination from '../../../components/CustomPagination/CustomPagination'

// MATERIAL UI CORES
import Grid from '@material-ui/core/Grid'

// STYLES
import useStyles from './projectUseStyles'

const Projects = () => {
  const classes = useStyles()

  return (
    <div className={classes['root']}>
      <Grid container>
        <LeftContent/>
        <RightContent/>
        <CustomPagination/>
      </Grid>
    </div>
  )
}

export default Projects
