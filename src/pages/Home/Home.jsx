import React from 'react'

// COMPONENTS (SORTED BY ORDER)
import Header from 'components/Header/Header'
import Introduction from './Introduction/Introduction'
// import HardSkill from './HardSkill/HardSkill'
// import Projects from './Projects/Projects'

// STYLES
import useStyles from './homeUseStyles'

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header/>
      <Introduction/>
      {/* <HardSkill/>
      <Projects/> */}
    </div>
  )
}

export default Home
