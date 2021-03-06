import React, { useState, useContext } from 'react'

// COMPONENTS
import Header from 'components/Header/Header'
import Contacts from 'components/Contacts/Contacts'

// CONTEXTS
import { AllPagesContext } from 'contexts/AllPagesContext'

// MATERIAL UI CORES
import IconButton from '@mui/material/IconButton'

// MATERIAL UI ICONS
import IconClose from '@mui/icons-material/Close'
import IconMenu from '@mui/icons-material/Menu'

// STYLES
import useStyles from './headerContactsControllerUseStyles'

const HeaderContactsController = () => {
  const { breakpointType } = useContext(AllPagesContext)

  const classes = useStyles()

  const [ isNavigationOpen, setIsNavigationOpen ] = useState(false)

  return (
    <>
      {/* TOGGLE NAVIGATION ICON FOR XS SCREEN */}
      {breakpointType === 'xs' &&
      <IconButton 
        className={classes.iconToggleContainer}
        onClick={() => setIsNavigationOpen(true)}
      >
        <IconMenu/>
      </IconButton>}

      {/* NAVIGATION ON XS SCREEN */}
      {breakpointType === 'xs' &&
      <div
        className={
          isNavigationOpen ? 
          classes.navigationContainer : 
          `${classes.navigationContainer} ${classes.hidden}`
        }
      >
        {/* CLOSE BUTTON */}
        <IconButton 
          className={classes.iconToggleContainer}
          onClick={() => setIsNavigationOpen(false)}
        >
          <IconClose/>
        </IconButton>

        {/* HEADER ON XS SCREEN */}
        <Header
          rootClassName={classes.headerRoot}
          sectionTextTypography='h2'
          sectionTextClassName={classes.headerSectionText}
          sectionTextOnClick={() => setIsNavigationOpen(false)}
        />

        {/* CONTACTS ON XS SCREEN */}
        <Contacts
          rootClassName={classes.contactsRoot}
          iconContainerClassName={classes.contactsIconContainer}
          tooltipPlacement='top'
        />
      </div>}

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
