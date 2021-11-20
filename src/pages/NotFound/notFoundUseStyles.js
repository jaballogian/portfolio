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
  captionAndTitleRoot: {
    position: 'fixed',
    top: 50,
  },
  caption: {
    textAlign: 'center',
    color: colors.cadetBlueCrayola,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    margin: '0px 25px',
  },
  image: {
    width: '75%',
    maxWidth: 750,
    position: 'fixed',
    top: '50%',
    transform: 'translate(0px, -50%)',
  },
  linkText: {
    textDecoration: 'none',
    position: 'fixed',
    bottom: 100,
  },
  button: {
    marginTop: 30,
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
    [theme.breakpoints.only('xl')]: {
      fontSize: 175,
    },
  },
}))

export default useStyles