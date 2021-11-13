import React, { useState } from 'react'

// COMPONENTS (SORTED BY ORDER)
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import CustomPagination from 'components/CustomPagination/CustomPagination'

// DATA
import projectsData from './projectsData'

// STYLES
import useStyles from './projectUseStyles'

const Projects = () => {
  const classes = useStyles()

  const [ currentPage, setCurrentPage ] = useState(1)

  return (
    <div className={classes.projectsRoot}>
      <ContentLeft content={projectsData[currentPage - 1]}/>
      <ContentRight content={projectsData[currentPage - 1]}/>

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
