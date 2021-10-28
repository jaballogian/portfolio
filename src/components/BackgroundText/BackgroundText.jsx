import React from 'react'
import PropTypes from 'prop-types'

// MATERIAL UI CORES
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './backgroundTextUseStyles'

const BackgroundText = (props) => {
  const { text } = props

  const classes = useStyles()

  return (
    <Typography 
      variant='h1'
      noWrap
      className={classes.backgroundText}
    >
      {text}
    </Typography>
  )
}

BackgroundText.defaultProps = {}

BackgroundText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default BackgroundText
