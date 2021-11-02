import React from 'react'

// COMPONENTS (SORTED BY ORDER)
import HeaderContactsController from './HeaderContactsController/HeaderContactsController'
// import Header from 'components/Header/Header'
// import Contacts from 'components/Contacts/Contacts'
import Introduction from './Introduction/Introduction'
// import HardSkill from './HardSkill/HardSkill'
// import Projects from './Projects/Projects'
import Footer from 'components/Footer/Footer'

// STYLES
import useStyles from './homeUseStyles'

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HeaderContactsController/>
      {/* <Header/>
      <Contacts/> */}
      <Introduction/>
      {/* <HardSkill/>
      <Projects/> */}
      <Footer/>
    </div>
  )
}

export default Home
