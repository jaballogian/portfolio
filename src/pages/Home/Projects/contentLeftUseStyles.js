// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  contentLeftRoot: {
    width: '50vw',
    backgroundColor: 'whitesmoke',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 100,
    paddingRight: 25,
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      height: '100vh',
      minHeight: 600,
      padding: 25,
    },
    [theme.breakpoints.only('sm')]: {
      width: '100%',
      height: '100vh',
      minHeight: 750,
      padding: '50px 75px',
    },
    [theme.breakpoints.only('md')]: {
      width: '100%',
      height: '100vh',
      minHeight: 750,
      padding: 75,
    },
  },
  contentLeftContainer: {
    backgroundColor: 'gainsboro',
  },
  title: {
    marginBottom: 25,
    [theme.breakpoints.only('xs')]: {
      marginBottom: 15,
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: 15,
    },
  },
  typeContainer: {
    display: 'flex',
    marginBottom: 25,
    [theme.breakpoints.only('xs')]: {
      marginBottom: 15,
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: 15,
    },
  },
  typeItem: {
    backgroundColor: colors['carribeanGreen'],
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: 175,
    height: 40,
    color: 'white',
    '&:last-child': {
      marginRight: 0,
    },
  },
  technologies: {
    color: colors['slateGray'],
    [theme.breakpoints.only('xs')]: {
      height: 55,
      marginBottom: 15,
    },
    [theme.breakpoints.only('sm')]: {
      height: 55,
      marginBottom: 15,
    },
    [theme.breakpoints.only('md')]: {
      marginBottom: 20,
    },
    [theme.breakpoints.only('lg')]: {
      marginBottom: 30,
    },
    [theme.breakpoints.only('xl')]: {
      marginBottom: 40,
    },
  },
  description: {
    colors: 'black',
    marginBottom: 40,
    height: 175,
  },
  linkText: {
    textDecoration: 'none',
  },
  exploreMoreContainer: {
    backgroundColor: colors['paradisePink'],
    textTransform: 'none',
    borderRadius: 10,
    height: 45,
    width: 200,
    '&:hover': {
      backgroundColor: colors['redCrayola'],
    },
    [theme.breakpoints.only('xs')]: {
      height: 40,
      width: 170,
    },
    [theme.breakpoints.only('sm')]: {
      height: 45,
      width: 180,
    },
  },
  exploreMoreText: {
    color: 'white',
  },
}))

export default useStyles