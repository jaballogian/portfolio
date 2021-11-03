import React from 'react'

// DATA
import hardSkillList from './hardSkillData'

// MATERIAL UI CORES
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './hardSkillUseStyles'

const HardSkill = () => {
  const classes = useStyles()

  return (
    <div className={classes.hardSkillRoot}>
      <Grid 
        container 
        justifyContent='center'
      >
        {hardSkillList.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12} lg={4}
          >
            {/* GRID ITEM CONTAINER */}
            <div className={classes.itemContainer}>

              {/* TITLE CONTAINER */}
              <div
                className={
                  `${classes.itemTitleContainer}
                  ${classes[`itemBackground${index}`]}`
                }
              >
                {/* TITLE */}
                <Typography 
                  variant='h3'
                  className={classes.itemTitle}
                >
                  {item.title}
                </Typography>
              </div>

              {/* CONTENTS */}
              <div>
                {item.contents.map((contentItem, contentIndex) => (
                  <Typography 
                    key={contentIndex}
                    variant='h5'
                    className={classes.itemContentText}
                  >
                    {contentItem}
                  </Typography>
                ))}
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default HardSkill
