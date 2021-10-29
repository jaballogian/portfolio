import React from 'react'

// MATERIAL UI CORES
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './headerUseStyles'

const Header = () => {
  const classes = useStyles()

  const sectionList = [
    'HOME',
    'SKILLS',
    'PROJECTS',
    'SERTIFICATES',
  ]

  return (
    <div className={classes.headerRoot}>
      {sectionList.map((item, index) => (
        <Typography
          key={index}
          variant='subtitle1'
          className={`${classes.sectionText}`}
        >
          {item}
        </Typography>
      ))}
    </div>
  )
}

export default Header
