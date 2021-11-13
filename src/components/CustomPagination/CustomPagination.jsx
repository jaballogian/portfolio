import React from 'react'
import PropTypes from 'prop-types'

// MATERIAL UI LABS
import Pagination from '@mui/material/Pagination'

// STYLES
import useStyles from './customPaginationStyles'

const CustomPagination = (props) => {
  const { 
    pageCount, 
    currentPage, 
    setCurrentPage,
    className,
  } = props

  const classes = useStyles()
  
  return (
    <Pagination 
      className={`${classes.customPaginationRoot} ${className}`}
      count={pageCount}
      siblingCount={0}
      boundaryCount={1}
      page={currentPage}
      onChange={(event, value) => setCurrentPage(value)}
    />
  )
}

CustomPagination.defaultProps = {
}

CustomPagination.propTypes = {
  className: PropTypes.string,
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
}

export default CustomPagination
