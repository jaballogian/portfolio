import React from 'react'

// MATERIAL UI LABS
import Pagination from '@material-ui/lab/Pagination'

// STYLES
import useStyles from './customPaginationUseStyles'

const CustomPagination = () => {
  const classes = useStyles()
  
  return (
    <div className={classes['root']}>
      <Pagination 
        count={10}
        siblingCount={0}
        boundaryCount={1}
      />
    </div>
  )
}

export default CustomPagination
