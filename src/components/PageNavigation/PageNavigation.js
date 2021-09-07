import React, { useState } from 'react'

// IMAGES (SORTED BY ORDER)
import IconFirst from '../../assets/images/icons/page_navigation_first.svg'
import IconFirstHovered from '../../assets/images/icons/page_navigation_first_hovered.svg'
import IconPrevious from '../../assets/images/icons/page_navigation_previous.svg'
import IconPreviousHovered from '../../assets/images/icons/page_navigation_previous_hovered.svg'
import IconNext from '../../assets/images/icons/page_navigation_next.svg'
import IconNextHovered from '../../assets/images/icons/page_navigation_next_hovered.svg'
import IconLast from '../../assets/images/icons/page_navigation_last.svg'
import IconLastHovered from '../../assets/images/icons/page_navigation_last_hovered.svg'

// MATERIAL UI CORES
import Typography from '@material-ui/core/Typography'

// STYLES
import useStyles from './pageNavigationUseStyles'

const PageNavigation = () => {
  const classes = useStyles()

  const [ isLeftListHovered, setILeftListHovered ] = useState(null)
  const [ isTextListHovered, setIsTextListHovered ] = useState(null)
  const [ isRightListHovered, setIsRightListHovered ] = useState(null)

  const leftIconList = [
    { 
      icon: IconFirst,
      hovered: IconFirstHovered,
    },
    { 
      icon: IconPrevious,
      hovered: IconPreviousHovered,
    },
  ]
  
  const textList = [ 0, 1, 2 ]
  
  const rightIconList = [
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
      {/* LEFT ICON LIST */}
      {leftIconList.map((item, index) => (
        <div
          key={index}
          className={
            isLeftListHovered === index ?
            `${classes['container']} ${classes['containerHovered']}` :
            classes['container']
          }
          onMouseEnter={() => setILeftListHovered(index)}
          onMouseLeave={() => setILeftListHovered(null)}
        >
          <img 
            src={
              isLeftListHovered === index ?
              item['hovered'] :
              item['icon']
            } 
            alt=''
          />
        </div>
      ))}

      {/* TEXT LIST */}
      {textList.map((item, index) => (
        <div
          key={index}
          className={
            isTextListHovered === index ?
            `${classes['container']} ${classes['containerHovered']}` :
            classes['container']
          }
          onMouseEnter={() => setIsTextListHovered(index)}
          onMouseLeave={() => setIsTextListHovered(null)}
        >
          <Typography 
            variant='h5'
            className={
              isTextListHovered === index ?
              `${classes['text']} ${classes['textHovered']}` :
              classes['text']
            }
          >
            {item + 1}
          </Typography>
        </div>
      ))}

      {/* RIGHT ICON LIST */}
      {rightIconList.map((item, index) => (
        <div
          key={index}
          className={
            isRightListHovered === index ?
            `${classes['container']} ${classes['containerHovered']}` :
            classes['container']
          }
          onMouseEnter={() => setIsRightListHovered(index)}
          onMouseLeave={() => setIsRightListHovered(null)}
        >
          <img 
            src={
              isRightListHovered === index ?
              item['hovered'] :
              item['icon']
            } 
            alt=''
          />
        </div>
      ))}
    </div>
  )
}

export default PageNavigation
