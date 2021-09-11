// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

// UTILS
import colors from '../../../../../utils/colors'

const useStyles = makeStyles((theme) => ({
  bottomContainer: {
    height: '50vh',
  },
  description: {
    colors: 'black',
    height: 160,
    [theme.breakpoints.only('lg')]: {
      marginBottom: 32,
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: 40,
    },
  },
  linkText: {
    textDecoration: 'none',
  },
  exploreMoreContainer: {
    backgroundColor: colors['paradisePink'],
    textTransform: 'none',
    height: 60,
    width: 260,
    borderRadius: 10,
    '&:hover': {
      backgroundColor: colors['redCrayola'],
    },
  },
  exploreMoreText: {
    color: 'white',
  },
}))

export default useStyles