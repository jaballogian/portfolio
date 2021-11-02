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
    <div className={classes.root}>
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
              {item.contents.map((contentItem, contentIndex) => {
                let className = `${classes.itemContentText}`
                if(contentIndex === 0) {
                  className = `${classes.itemContentText} ${classes.itemContentFirst}`
                }
                else if(contentIndex === item.contents.length - 1) {
                  className = `${classes.itemContentText} ${classes.itemContentLast}`
                }

                return(
                  <Typography 
                    key={contentIndex}
                    variant='h5'
                    className={className}
                  >
                    {contentItem}
                  </Typography>
                )
              })}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default HardSkill
