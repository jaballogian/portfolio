import React, { useContext } from 'react'

// COMPONENTS
import Header from 'components/Header/Header'
import Contacts from 'components/Contacts/Contacts'

// CONTEXTS
import { AllPagesContext } from 'contexts/AllPagesContext'

// MATERIAL UI CORES
import IconButton from '@mui/material/IconButton'

// MATERIAL UI ICONS
import IconMenu from '@mui/icons-material/Menu'

// STYLES
import useStyles from './headerContactsControllerUseStyles'

const HeaderContactsController = () => {
  const { breakpointType } = useContext(AllPagesContext)

  const classes = useStyles()

  console.log(breakpointType)

  return (
    <>
      {/* TOGGLE ICON FOR XS SCREEN */}
      {breakpointType === 'xs' &&
      <IconButton className={classes.iconToggleContainer}>
        <IconMenu/>
      </IconButton>}

      {/* SM TO XL SCREEN */}
      {breakpointType !== 'xs' &&
      <>
        <Header/>
        <Contacts/>
      </>}
    </>
  )
}

export default HeaderContactsController
