import React from 'react'
import PropTypes from 'prop-types'

// MATERIAL UI CORES
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './backgroundTextUseStyles'

const textVariantList = [
  'h1', 
  'h2', 
  'h3', 
  'h4', 
  'h5', 
  'subtitle1', 
  'subtitle2',
]

const BackgroundText = (props) => {
  const { 
    text, 
    className,
    noWrap,
    textVariant,
  } = props

  const classes = useStyles()

  return (
    <Typography 
      variant={textVariant}
      noWrap={noWrap}
      className={`${classes.backgroundText} ${className}`}
    >
      {text}
    </Typography>
  )
}

BackgroundText.defaultProps = {
  noWrap: true,
}

BackgroundText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  noWrap: PropTypes.bool,
  textVariant: PropTypes.oneOf(textVariantList).isRequired,
}

export default BackgroundText
