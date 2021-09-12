// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

// UTILS
import colors from '../../../../../utils/colors'

const useStyles = makeStyles((theme) => ({
  bottomContainer: {
    [theme.breakpoints.down('xs')]: {
      height: '37.5vh',
      minHeight: 300,
    },
    [theme.breakpoints.only('sm')]: {
      height: '37.5vh',
      minHeight: 300,
    },
    [theme.breakpoints.only('md')]: {
      height: '37.5vh',
      minHeight: 300,
    },
    [theme.breakpoints.only('lg')]: {
      height: '50vh',
    },
    [theme.breakpoints.up('xl')]: {
      height: '50vh',
    },
  },
  description: {
    colors: 'black',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
      height: 200,
    },
    [theme.breakpoints.only('md')]: {
      marginBottom: 24,
      height: 160,
    },
    [theme.breakpoints.only('lg')]: {
      marginBottom: 32,
      height: 160,
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: 40,
      height: 160,
    },
  },
  linkText: {
    textDecoration: 'none',
  },
  exploreMoreContainer: {
    backgroundColor: colors['paradisePink'],
    textTransform: 'none',
    borderRadius: 10,
    '&:hover': {
      backgroundColor: colors['redCrayola'],
    },
    [theme.breakpoints.down('xs')]: {
      height: 45,
      width: 200,
    },
    [theme.breakpoints.only('sm')]: {
      height: 50,
      width: 225,
    },
    [theme.breakpoints.up('md')]: {
      height: 60,
      width: 260,
    },
  },
  exploreMoreText: {
    color: 'white',
  },
}))

export default useStyles