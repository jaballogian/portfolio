import React from 'react'

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
  
  const contactList = [
    {
      icon: <IconEmail className={classes.icon}/>,
      text: 'Email me',
      // TODO: FIND HOW TO ATTACH EMAIL ON CLICK
      url: '',
    },
    {
      icon: <IconInstagram className={classes.icon}/>,
      text: 'Follow me',
      url: 'https://www.instagram.com/jaballogian/',
    },
    {
      icon: <IconLinkedIn className={classes.icon}/>,
      text: 'Connect me',
      url: 'https://www.linkedin.com/in/jaballogian/',
    },
    {
      icon: <IconGitHub className={classes.icon}/>,
      text: 'Find this code',
      url: 'https://github.com/jaballogian/portfolio',
    },
    {
      icon: <MdiIcon path={mdiStackOverflow} className={classes.icon}/>,
      text: 'Find me',
      url: 'https://stackoverflow.com/users/8339172/jabal-logian',
    },
  ]

  const openUrlInNewTab = (inputUrl) => {
    const newWindow = window.open(inputUrl, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
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
            onClick={() => openUrlInNewTab(item.url)}
          >
            {item.icon}
          </IconButton>
        </CustomTooltipContacts>
      ))}
    </div>
  )
}

export default Contacts
