import React, { useState, useEffect } from 'react'

// COMPONENTS (SORTED BY ORDER)
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import CustomPagination from 'components/CustomPagination/CustomPagination'

// DATA
import projectsData from './projectsData'

// MATERIAL UI CORES
import Grid from '@mui/material/Grid'

// STYLES
import useStyles from './projectUseStyles'

const Projects = () => {
  const classes = useStyles()

  const [ currentPage, setCurrentPage ] = useState(1)
  const [ isFade, setIsFade ] = useState(true)

  useEffect(() => {
    setIsFade(true)
  }, [currentPage])

  return (
    <div className={classes.projectsRoot}>
      <Grid 
        container 
        className={isFade ? classes.rootAnimation : ''}
        onAnimationEnd={() => setIsFade(false)}
      >
        <LeftContent content={projectsData[currentPage - 1]}/>
        <RightContent content={projectsData[currentPage - 1]}/>
      </Grid>
      <div className={classes.paginationContainer}>
        <CustomPagination 
          pageCount={projectsData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default Projects
