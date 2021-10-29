import React, { useState } from 'react'

// MATERIAL UI CORES
import IconButton from '@mui/material/IconButton'

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
    // TODO: CHANGE THIS INTO STACKOVERFLOW
    {
      icon: <IconGitHub className={classes.icon}/>,
      text: 'Find my code',
      url: 'https://github.com/jaballogian',
    },
  ]

  return (
    <div className={classes.contactsRoot}>
      {contactList.map((item, index) => (
        <IconButton
          key={index}
          className={classes.iconContainer}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {item.icon}
        </IconButton>
      ))}
    </div>
  )
}

export default Contacts
