import React from 'react'

// COMPONENTS (SORTED BY ORDER)
import Introduction from './Introduction/Introduction'

// STYLES
import useStyles from './homeUseStyles'

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes['root']}>
      <Introduction/>
    </div>
  )
}

export default Home
