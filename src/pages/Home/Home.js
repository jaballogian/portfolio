import React from 'react'

// COMPONENTS (SORTED BY ORDER)
import Introduction from './Introduction/Introduction'
import HardSkill from './HardSkill/HardSkill'

// STYLES
import useStyles from './homeUseStyles'

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes['root']}>
      <Introduction/>
      <HardSkill/>
    </div>
  )
}

export default Home
