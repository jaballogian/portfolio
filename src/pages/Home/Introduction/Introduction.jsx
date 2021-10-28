import React from 'react'

// COMPONENTS
import BackgroundText from 'components/BackgroundText/BackgroundText'

// IMAGES
import IllustrationsPerson from 'assets/images/illustrations/introduction_person.svg'

// MATERIAL UI CORES
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './introductionUseStyles'

const Introduction = () => {
  const classes = useStyles()

  return (
    <Box className={classes.introdutionRoot}>
      {/* LEFT SECTION */}
      <Box className={classes.section}>
        <Box className={classes.titleAndCaption}>
          {/* TITLE */}
          <Typography 
            variant='h1'
            className={classes.title}
          >
            Hello, I'm <Box className={classes.blueText}>Jabal</Box>
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
        </Box>
      </Box>

      {/* RIGHT SECTION */}
      <Box className={classes.section}>
        <Box 
          component='img'
          src={IllustrationsPerson}
          alt=''
          className={classes.illustration}
        />
      </Box>

      {/* BACKGROUND TEXT */}
      <BackgroundText text='SOFTWARE ENGINEER'/>
    </Box>
  )
}

export default Introduction
