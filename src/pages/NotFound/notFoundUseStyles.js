// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  notFoundRoot: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  caption: {
    color: colors.cadetBlueCrayola,
  },
  title: {
    color: 'black',
  },
  image: {},
  linkText: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: colors.paradisePink,
    textTransform: 'none',
    borderRadius: 10,
    '&:hover': {
      backgroundColor: colors.redCrayola,
    },
  },
  buttonText: {
    color: 'white',
  },
  backgroundText: {
    height: 155,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      height: 'unset',
      bottom: -5,
    },
    [theme.breakpoints.only('sm')]: {
      height: 67.5,
    },
    [theme.breakpoints.only('md')]: {
      height: 75,
    },
    [theme.breakpoints.only('lg')]: {
      height: 85,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 175,
    },
  },
}))

export default useStyles