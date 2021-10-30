import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

// MATERIAL UI CORES
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './headerUseStyles'

const Header = () => {
  const classes = useStyles()

  const history = useHistory()

  let location = useLocation()
  location = location.hash.replace('#', '')

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
      return `${classes.sectionText} ${classes.sectionHover}`
    }
  }

  useEffect(() => {
    history.push('/#home')
  }, [])

  return (
    <div className={classes.headerRoot}>
      {sectionList.map((item, index) => (
        <Typography
          key={index}
          variant='subtitle1'
          className={sectionClassName(item)}
          onClick={() => history.push(`/#${item.toLowerCase()}`)}
        >
          {item}
        </Typography>
      ))}
    </div>
  )
}

export default Header
