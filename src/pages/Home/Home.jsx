import React from 'react'

// COMPONENTS (SORTED BY ORDER)
import Introduction from './Introduction/Introduction'
// import HardSkill from './HardSkill/HardSkill'
// import Projects from './Projects/Projects'

// MATERIAL UI CORES
import Box from '@mui/material/Box'

// STYLES
import useStyles from './homeUseStyles'

const Home = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Introduction/>
      {/* <HardSkill/>
      <Projects/> */}
    </Box>
  )
}

export default Home
