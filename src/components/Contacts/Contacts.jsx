import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

// CONTEXTS
import { AllPagesContext } from 'contexts/AllPagesContext'

// CUSTOM COMPONENTS
import CustomTooltipContacts from 'components/Customs/CustomTooltipContacts'

// MATERIAL UI CORES
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// MATERIAL UI ICONS
import IconEmail from '@mui/icons-material/Email'
import IconInstagram from '@mui/icons-material/Instagram'
import IconGitHub from '@mui/icons-material/GitHub'
import IconLinkedIn from '@mui/icons-material/LinkedIn'

// STYLES
import useStyles from './contactsUseStyles'

const Contacts = (props) => {
  const { 
    rootClassName,
    iconContainerClassName,
   } = props

  const { changeToast } = useContext(AllPagesContext)

  const classes = useStyles()

  const [ hoveredItem, setHoveredItem ] = useState(null)
  
  const contactList = [
    {
      icon: IconEmail,
      text: 'Email me',
      url: 'hello.jaballogian@gmail.com',
    },
    {
      icon: IconInstagram,
      text: 'Follow me',
      url: 'https://www.instagram.com/jaballogian/',
    },
    {
      icon: IconLinkedIn,
      text: 'Connect me',
      url: 'https://www.linkedin.com/in/jaballogian/',
    },
    {
      icon: IconGitHub,
      text: 'Find this code',
      url: 'https://github.com/jaballogian/portfolio',
    },
  ]

  const copyEmailToClipboard = (inputEmail) => {
    const el = document.createElement('textarea')
    el.value = inputEmail
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    
    changeToast({
      open: true,
      message: `Email ${inputEmail} is copied to clipboard`, 
      severity: 'success',
      vertical: 'bottom',
      horizontal: 'center',
    })
  }

  const openUrlInNewTab = (inputUrl, inputIndex) => {
    if(inputIndex === 0) {
      copyEmailToClipboard(inputUrl)
    }
    else {
      const newWindow = window.open(inputUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }

  return (
    <div className={`${classes.contactsRoot} ${rootClassName}`}>
      {contactList.map((item, index) => (
        // TOOLTIP
        <CustomTooltipContacts
          key={index}
          placement='right'
          title={
            <Typography
              variant='subtitle1'
            >
              {item.text}
            </Typography>
          }
        >
          {/* ICON BUTTON */}
          <IconButton 
            className={`${classes.iconContainer} ${iconContainerClassName}`}
            onClick={() => openUrlInNewTab(item.url, index)}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* ICON */}
            <item.icon
              className={
                hoveredItem === index ?
                `${classes.icon} ${classes.iconHovered}` :
                classes.icon
              }
            />
          </IconButton>
        </CustomTooltipContacts>
      ))}
    </div>
  )
}

Contacts.defaultProps = {
  rootClassName: '',
  iconContainerClassName: '',
}

Contacts.propTypes = {
  rootClassName: PropTypes.string,
  iconContainerClassName: PropTypes.string,
}

export default Contacts
