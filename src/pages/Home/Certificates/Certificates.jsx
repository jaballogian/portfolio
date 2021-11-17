import React from 'react'

// COMPONENTS
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'

// STYLES
import useStyles from './certificatesUseStyles'

const Certificates = () => {
  const classes = useStyles()

  return (
    <div className={classes.certificatesRoot}>
      <ContentLeft/>
      <ContentRight/>
    </div>
  )
}

export default Certificates
