import React from 'react'

// MATERIAL UI CORES
import Typography from '@material-ui/core/Typography'

// STYLES
import useStyles from './topContentUseStyles'

const TopContent = (props) => {
  const { content } = props

  const classes = useStyles()

  return (
    <div className={classes['topContainer']}>
      {/* TITLE */}
      <Typography
        variant='h2'
        className={classes['title']}
      >
        {content['title']}
      </Typography>

      {/* TYPE */}
      <div className={classes['typeContainer']}>
        <Typography
          variant='h4'
          className={classes['typeText']}
        >
          {content['type']}
        </Typography>
      </div>

      {/* TECHNOLOGIES */}
      <Typography
        variant='h4'
        className={classes['technologies']}
      >
        {content['technologies']}
      </Typography>
    </div>
  )
}

export default TopContent
