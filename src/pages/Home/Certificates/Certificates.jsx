import React, { useState, useContext } from 'react'

// COMPONENTS
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import CustomPagination from 'components/CustomPagination/CustomPagination'
import BackgroundText from 'components/BackgroundText/BackgroundText'

// CONTEXTS
import { AllPagesContext } from 'contexts/AllPagesContext'

// DATA
import certificatesData from './certificatesData'

// STYLES
import useStyles from './certificatesUseStyles'

const Certificates = () => {
  const { breakpointType } = useContext(AllPagesContext)

  const classes = useStyles()

  const [ currentPage, setCurrentPage ] = useState(1)

  return (
    <div className={classes.certificatesRoot}>
      <ContentLeft content={certificatesData[currentPage - 1]}/>
      <ContentRight content={certificatesData[currentPage - 1]}/>

      {/* PAGINATION */}
      <CustomPagination 
        className={classes.paginationContainer}
        pageCount={certificatesData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* BACKGROUND TEXT */}
      <BackgroundText
        text='LEARNING CERTIFICATES'
        className={classes.backgroundText}
        noWrap={(breakpointType === 'xs' || breakpointType === 'sm') ? false : true}
        textVariant='h1'
      />
    </div>
  )
}

export default Certificates
