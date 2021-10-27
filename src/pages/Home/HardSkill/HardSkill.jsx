import React from 'react'

// DATA
import hardSkillList from './hardSkillData'

// MATERIAL UI CORES
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// STYLES
import styles from './hardSkillStyles'

const HardSkill = () => {
  return (
    <Box sx={styles.root}>
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
            <Box sx={styles.itemContainer}>

              {/* TITLE CONTAINER */}
              <Box
                sx={
                  `${styles.itemTitleContainer}
                  ${styles[`itemBackground${index}`]}`
                }
              >
                {/* TITLE */}
                <Typography 
                  variant='h3'
                  sx={styles.itemTitle}
                >
                  {item.title}
                </Typography>
              </Box>

              {/* CONTENTS */}
              {item.contents.map((contentItem, contentIndex) => {
                let sx = `${styles.itemContentText} `
                if(contentIndex === 0) {
                  sx = `${styles.itemContentText} ${styles.itemContentFirst}`
                }
                else if(contentIndex === item.contents.length - 1) {
                  sx = `${styles.itemContentText} ${styles.itemContentLast}`
                }

                return(
                  <Typography 
                    key={contentIndex}
                    variant='h4'
                    sx={sx}
                  >
                    {contentItem}
                  </Typography>
                )
              })}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default HardSkill
