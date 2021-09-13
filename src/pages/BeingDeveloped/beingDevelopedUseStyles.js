// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

// UTILS
import colors from '../../utils/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '0px 25px',
    },
    [theme.breakpoints.only('sm')]: {
      padding: '0px 50px',
    },
    [theme.breakpoints.only('md')]: {
      padding: '0px 75px',
    },
    [theme.breakpoints.only('lg')]: {
      padding: '0px 100px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0px 125px',
    },
  },
  title: {
    marginBottom: 120,
  },
  imageAndButtonContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
  },
  linkText: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: colors['paradisePink'],
    textTransform: 'none',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    bottom: 0,
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
  buttonText: {
    color: 'white',
  },
}))

export default useStyles