import React from 'react'
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
    sectionTextOnClick,
   } = props
  
  const classes = useStyles()

  const history = useHistory()

  let location = useLocation()
  location = location.hash.replace('#', '')

  const sectionList = [
    'HOME',
    'SKILLS',
    'PROJECTS',
    'CERTIFICATES',
  ]

  const sectionClassName = (inputItem, inputIndex) => {
    if((inputIndex === 0 && location === '') || (inputItem.toLowerCase() === location.toLowerCase())) {
      return `${classes.sectionText} ${classes.sectionActive} ${sectionTextClassName}`
    }
    else {
      return `${classes.sectionText} ${classes.sectionHover} ${sectionTextClassName}`
    }
  }

  const onSectionTextIsClick = (inputItem) => {
    history.push(`/#${inputItem.toLowerCase()}`)
    sectionTextOnClick && sectionTextOnClick()
  }

  return (
    <div className={`${classes.headerRoot} ${rootClassName}`}>
      {sectionList.map((item, index) => (
        <Typography
          key={index}
          variant={sectionTextTypography ? sectionTextTypography : 'subtitle1'}
          className={sectionClassName(item, index)}
          onClick={() => onSectionTextIsClick(item)}
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
  sectionTextOnClick: PropTypes.func,
}

export default Header
