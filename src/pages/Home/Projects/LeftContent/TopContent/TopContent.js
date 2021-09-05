import React from 'react'

// MATERIAL UI CORES
import Typography from '@material-ui/core/Typography'

// STYLES
import useStyles from './topContentUseStyles'

const TopContent = () => {
  const classes = useStyles()

  const title = 'Project Title'
  const type = 'Mobile App'
  const technologies = 'Technologies: Technology 1, Technology 2, Technology 3'

  return (
    <div className={classes['topContainer']}>
      {/* TITLE */}
      <Typography
        variant='h2'
        className={classes['title']}
      >
        {title}
      </Typography>

      {/* TYPE */}
      <div className={classes['typeContainer']}>
        <Typography
          variant='h4'
          className={classes['typeText']}
        >
          {type}
        </Typography>
      </div>

      {/* TECHNOLOGIES */}
      <Typography
        variant='h4'
        className={classes['technologies']}
      >
        {technologies}
      </Typography>
    </div>
  )
}

export default TopContent
