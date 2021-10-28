import React from 'react'

// COMPONENTS
import BackgroundText from 'components/BackgroundText/BackgroundText'

// IMAGES
import IllustrationsPerson from 'assets/images/illustrations/introduction_person.svg'

// MATERIAL UI CORES
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

// STYLES
import useStyles from './introductionUseStyles'

const Introduction = () => {
  const theme = useTheme()
  const classes = useStyles()

  const isSmScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div className={classes.introdutionRoot}>
      {/* LEFT SECTION */}
      <div className={classes.section}>
        <div className={classes.titleAndCaption}>
          {/* TITLE */}
          <Typography 
            variant='h1'
            className={classes.title}
          >
            Hello, I'm <div className={classes.blueText}>Jabal</div>
          </Typography>

          {/* CAPTION */}
          <Typography
            variant='h3'
            className={classes.caption}
          >
            A frontend developer,
            <br/>mobile application developer,
            <br/>and IoT engineer.
          </Typography>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className={`${classes.section} ${classes.illustrationSection}`}>
        <img
          src={IllustrationsPerson}
          alt=''
          className={classes.illustration}
        />
      </div>

      {/* BACKGROUND TEXT */}
      <BackgroundText
        text='SOFTWARE ENGINEER'
        className={classes.backgroundText}
        noWrap={isSmScreen ? false : true}
        textVariant='h1'
      />
    </div>
  )
}

export default Introduction
