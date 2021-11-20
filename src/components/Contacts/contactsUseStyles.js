// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  contactsRoot: {
    position: 'fixed',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    bottom: 100,
    left: 50,
    [theme.breakpoints.only('sm')]: {
      left: 25,
    },
    [theme.breakpoints.only('md')]: {
      left: 25,
    },
    [theme.breakpoints.only('lg')]: {
      left: 40,
    },
  },
  iconContainer: {
    marginBottom: 25,
    backgroundColor: colors.cultured,
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
    '&:last-child': {
      marginBottom: 0,
    },
    '&:hover': {
      backgroundColor: colors.blueNCS,
    },
  },
  icon: {
    color: colors.slateGray,
  },
  iconHovered: {
    color: 'white',
  },
}))

export default useStyles