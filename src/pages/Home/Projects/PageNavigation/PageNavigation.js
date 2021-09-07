import React, { useState } from 'react'

// IMAGES (SORTED BY ORDER)
import IconFirst from '../../../../assets/images/icons/page_navigation_first.svg'
import IconFirstHovered from '../../../../assets/images/icons/page_navigation_first_hovered.svg'
import IconPrevious from '../../../../assets/images/icons/page_navigation_previous.svg'
import IconPreviousHovered from '../../../../assets/images/icons/page_navigation_previous_hovered.svg'
import IconNext from '../../../../assets/images/icons/page_navigation_next.svg'
import IconNextHovered from '../../../../assets/images/icons/page_navigation_next_hovered.svg'
import IconLast from '../../../../assets/images/icons/page_navigation_last.svg'
import IconLastHovered from '../../../../assets/images/icons/page_navigation_last_hovered.svg'

// MATERIAL UI CORES
import Typography from '@material-ui/core/Typography'

// STYLES
import useStyles from './pageNavigationUseStyles'

const PageNavigation = () => {
  const classes = useStyles()

  const [ hovered, setHovered ] = useState(null)

  const list = [
    { 
      icon: IconFirst,
      hovered: IconFirstHovered,
    },
    { 
      icon: IconPrevious,
      hovered: IconPreviousHovered,
    },
    { text: '1' },
    { text: '2' },
    { text: '3' },
    { 
      icon: IconNext,
      hovered: IconNextHovered,
    },
    { 
      icon: IconLast,
      hovered: IconLastHovered,
    },
  ]

  return (
    <div className={classes['root']}>
      {list.map((item, index) => (
        // ITEM CONTAINER
        <div
          key={index}
          className={
            hovered === index ?
            `${classes['container']} ${classes['containerHovered']}` :
            classes['container']
          }
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* ICON */}
          {item['icon'] &&
          <img 
            src={
              hovered === index ?
              item['hovered'] :
              item['icon']
            } 
            alt=''
          />}

          {/* TEXT */}
          {item['text'] &&
          <Typography 
            variant='h5'
            className={
              hovered === index ?
              `${classes['text']} ${classes['textHovered']}` :
              classes['text']
            }
          >
            {item['text']}
          </Typography>}
        </div>
      ))}
    </div>
  )
}

export default PageNavigation
