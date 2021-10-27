import React from 'react'

// MATERIAL UI LABS
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'

// STYLES
import styles from './customPaginationStyles'

const CustomPagination = (props) => {
  const { pageCount, currentPage, setCurrentPage } = props
  
  return (
    <Box sx={styles.root}>
      <Pagination 
        count={pageCount}
        siblingCount={0}
        boundaryCount={1}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
      />
    </Box>
  )
}

export default CustomPagination
