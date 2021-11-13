import React, { useState, useEffect } from 'react'

// COMPONENTS (SORTED BY ORDER)
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
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
        <ContentLeft content={projectsData[currentPage - 1]}/>
        <ContentRight content={projectsData[currentPage - 1]}/>
      </Grid>

      {/* PAGINATION */}
      <CustomPagination 
        className={classes.paginationContainer}
        pageCount={projectsData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default Projects
