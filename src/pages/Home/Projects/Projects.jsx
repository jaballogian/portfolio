import React, { useState, useEffect } from 'react'

// COMPONENTS (SORTED BY ORDER)
import LeftContent from './LeftContent/LeftContent'
import RightContent from './RightContent/RightContent'
import CustomPagination from 'components/CustomPagination/CustomPagination'

// DATA
import projectsData from './projectsData'

// MATERIAL UI CORES
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// STYLES
import styles from './projectStyles'

const Projects = () => {
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ isFade, setIsFade ] = useState(true)

  useEffect(() => {
    setIsFade(true)
  }, [currentPage])

  return (
    <Box sx={styles.root}>
      <Grid 
        container 
        sx={isFade ? styles.rootAnimation : ''}
        onAnimationEnd={() => setIsFade(false)}
      >
        <LeftContent content={projectsData[currentPage - 1]}/>
        <RightContent content={projectsData[currentPage - 1]}/>
      </Grid>
      <Box sx={styles.paginationContainer}>
        <CustomPagination 
          pageCount={projectsData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </Box>
  )
}

export default Projects
