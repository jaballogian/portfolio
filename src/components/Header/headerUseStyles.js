// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  headerRoot: {
    display: 'flex',
    position: 'absolute',
    width: 'fit-content',
    zIndex: 1,
    top: 67,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  sectionText: {
    color: colors.slateGray,
    marginRight: 100,
    cursor: 'pointer',
    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      color: 'black',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
  },
}))

export default useStyles