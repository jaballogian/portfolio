import React from 'react'
import { useLocation } from 'react-router-dom'

// MATERIAL UI CORES
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './headerUseStyles'

const Header = () => {
  const classes = useStyles()

  let location = useLocation()
  location = location.hash.replace('#', '')
  console.log(location)

  const sectionList = [
    'HOME',
    'SKILLS',
    'PROJECTS',
    'SERTIFICATES',
  ]

  const sectionClassName = (inputItem) => {
    if(inputItem.toLowerCase() === location.toLowerCase()) {
      return `${classes.sectionText} ${classes.sectionActive}`
    }
    else {
      return classes.sectionText
    }
  }

  return (
    <div className={classes.headerRoot}>
      {sectionList.map((item, index) => (
        <Typography
          key={index}
          variant='subtitle1'
          className={sectionClassName(item)}
        >
          {item}
        </Typography>
      ))}
    </div>
  )
}

export default Header
