import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

// MATERIAL UI CORES
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './headerUseStyles'

const Header = (props) => {
  const { 
    rootClassName,
    sectionTextTypography,
    sectionTextClassName,
   } = props
  
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
      return `${classes.sectionText} ${classes.sectionActive} ${sectionTextClassName}`
    }
    else {
      return `${classes.sectionText} ${classes.sectionHover} ${sectionTextClassName}`
    }
  }

  useEffect(() => {
    history.push('/#home')
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`${classes.headerRoot} ${rootClassName}`}>
      {sectionList.map((item, index) => (
        <Typography
          key={index}
          variant={sectionTextTypography ? sectionTextTypography : 'subtitle1'}
          className={sectionClassName(item)}
          onClick={() => history.push(`/#${item.toLowerCase()}`)}
        >
          {item}
        </Typography>
      ))}
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
  sectionTextTypography: 'subtitle1',
  sectionTextClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  sectionTextTypography: PropTypes.string,
  sectionTextClassName: PropTypes.string,
}

export default Header
