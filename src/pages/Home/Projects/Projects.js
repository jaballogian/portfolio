import React, { useState } from 'react'

// COMPONENTS (SORTED BY ORDER)
import LeftContent from './LeftContent/LeftContent'
import RightContent from './RightContent/RightContent'
import CustomPagination from '../../../components/CustomPagination/CustomPagination'

// DATA
import projectsData from './projectsData'

// MATERIAL UI CORES
import Grid from '@material-ui/core/Grid'

// STYLES
import useStyles from './projectUseStyles'

const Projects = () => {
  const classes = useStyles()

  const [ currentPage, setCurrentPage ] = useState(1)

  return (
    <div className={classes['root']}>
      <Grid container>
        <LeftContent content={projectsData[currentPage - 1]}/>
        <RightContent content={projectsData[currentPage - 1]}/>
        <CustomPagination 
          pageCount={projectsData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Grid>
    </div>
  )
}

export default Projects
