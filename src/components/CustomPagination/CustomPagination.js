import React from 'react'

// MATERIAL UI LABS
import Pagination from '@material-ui/lab/Pagination'

// STYLES
import useStyles from './customPaginationUseStyles'

const CustomPagination = (props) => {
  const { pageCount, currentPage, setCurrentPage } = props

  const classes = useStyles()
  
  return (
    <div className={classes['root']}>
      <Pagination 
        count={pageCount}
        siblingCount={0}
        boundaryCount={1}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
      />
    </div>
  )
}

export default CustomPagination