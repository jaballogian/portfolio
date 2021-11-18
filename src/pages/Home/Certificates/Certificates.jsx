import React, { useState } from 'react'

// COMPONENTS
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import CustomPagination from 'components/CustomPagination/CustomPagination'

// DATA
import certificatesData from './certificatesData'

// STYLES
import useStyles from './certificatesUseStyles'

const Certificates = () => {
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
    </div>
  )
}

export default Certificates
