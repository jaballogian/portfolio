import React, { useState } from 'react'

// CUSTOM COMPONENTS
import CustomTooltipContacts from 'components/Customs/CustomTooltipContacts'

// MATERIAL DESIGN ICONS
import MdiIcon from '@mdi/react'
import { mdiStackOverflow } from '@mdi/js'

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

const Contacts = () => {
  const classes = useStyles()

  const [ hoveredItem, setHoveredItem ] = useState(null)
  
  const contactList = [
    {
      iconType: 'mui',
      icon: IconEmail,
      text: 'Email me',
      url: 'hello.jaballogian@gmail.com',
    },
    {
      iconType: 'mui',
      icon: IconInstagram,
      text: 'Follow me',
      url: 'https://www.instagram.com/jaballogian/',
    },
    {
      iconType: 'mui',
      icon: IconLinkedIn,
      text: 'Connect me',
      url: 'https://www.linkedin.com/in/jaballogian/',
    },
    {
      iconType: 'mui',
      icon: IconGitHub,
      text: 'Find this code',
      url: 'https://github.com/jaballogian/portfolio',
    },
    {
      iconType: 'mdi',
      iconPath: mdiStackOverflow,
      text: 'Find me',
      url: 'https://stackoverflow.com/users/8339172/jabal-logian',
    },
  ]

  const copyEmailToClipboard = (inputEmail) => {
    const el = document.createElement('textarea')
    el.value = inputEmail
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
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
    <div className={classes.contactsRoot}>
      {contactList.map((item, index) => (
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
          <IconButton 
            className={classes.iconContainer}
            onClick={() => openUrlInNewTab(item.url, index)}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.iconType === 'mui' ?
            <item.icon
              className={
                hoveredItem === index ?
                `${classes.icon} ${classes.iconHovered}` :
                classes.icon
              }
            /> :
            item.iconType === 'mdi' ?
            <MdiIcon
              path={item.iconPath}
              className={
                hoveredItem === index ?
                `${classes.icon} ${classes.iconHovered}` :
                classes.icon
              }
            /> :
            null}
          </IconButton>
        </CustomTooltipContacts>
      ))}
    </div>
  )
}

export default Contacts
