import React, { useState, useContext } from 'react'

// COMPONENTS
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import CustomPagination from 'components/CustomPagination/CustomPagination'
import BackgroundText from 'components/BackgroundText/BackgroundText'

// CONTEXTS
import { AllPagesContext } from 'contexts/AllPagesContext'

// DATA
import projectsData from './projectsData'

// STYLES
import useStyles from './projectUseStyles'

const Projects = () => {
  const { breakpointType } = useContext(AllPagesContext)
  
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

      {/* BACKGROUND TEXT */}
      <BackgroundText
        text='PUBLIC PROJECTS'
        className={classes.backgroundText}
        noWrap={breakpointType === 'xs' ? false : true}
        textVariant='h1'
      />
    </div>
  )
}

export default Projects
