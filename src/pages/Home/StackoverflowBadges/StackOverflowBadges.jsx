import React from 'react'

// CUSTOM COMPONENTS
import CustomTooltipColorCultured from '../../../components/Customs/CustomTooltipColorCultured'

// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI CORES
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './stackOverflowBadgesUseStyles'

const StackOverflowBadges = () => {
  const classes = useStyles()

  const badgesList = [
    {
      count: 2,
      color: colors.stackoverflowGold,
    },
    {
      count: 7,
      color: colors.stackoverflowSilver,
    },
    {
      count: 20,
      color: colors.stackoverflowBronze,
    },
  ]
  
  const onRootIsClicked = () => {
    const stackoverflowUrl = 'https://stackoverflow.com/users/8339172/jabal-logian'
    const newWindow = window.open(stackoverflowUrl, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <CustomTooltipColorCultured
      placement={'left'}
      title={
        <Typography
          variant='subtitle1'
          className={classes.text}
        >
          2 Golds,<br/>
          6 Silvers, and<br/>
          19 Bonzes on<br/>
          Stackoverflow
        </Typography>
      }
    >
      <div
        className={classes.stackoverflowBadgesRoot}
        onClick={() => onRootIsClicked()}
      >
        {badgesList.map((item, index) => (
          <div 
            key={index}
            className={classes.badgesItemContainer}
          >
            {/* CIRCLE */}
            <div 
              className={classes.circle}
              style={{ backgroundColor: item.color }}
            />

            {/* TEXT */}
            <Typography 
              className={classes.text}
              style={{ color: item.color }}
            >
              {item.count}
            </Typography>
          </div>
        ))}
      </div>
    </CustomTooltipColorCultured>
  )
}

export default StackOverflowBadges
