// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // [theme.breakpoints.down('xs')]: {
    //   padding: '0px 25px',
    // },
    // [theme.breakpoints.only('sm')]: {
    //   padding: '0px 50px',
    // },
    // [theme.breakpoints.only('md')]: {
    //   padding: '0px 75px',
    // },
    // [theme.breakpoints.only('lg')]: {
    //   padding: '0px 100px',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   padding: '0px 125px',
    // },
  },
  title: {
    // [theme.breakpoints.down('xs')]: {
    //   marginBottom: 30,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   marginBottom: 30,
    // },
    // [theme.breakpoints.only('md')]: {
    //   marginBottom: 40,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   marginBottom: 60,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   marginBottom: 120,
    // },
  },
  image: {
    textAlign: 'center',
    margin: '0px auto',
    // [theme.breakpoints.down('xs')]: {
    //   width: '80%',
    //   marginBottom: 30,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   width: '75%',
    //   marginBottom: 30,
    // },
    // [theme.breakpoints.only('md')]: {
    //   width: 500,
    //   marginBottom: 30,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   width: 650,
    //   marginBottom: 30,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   width: 800,
    //   marginBottom: 40,
    // },
  },
  linkText: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: colors['paradisePink'],
    textTransform: 'none',
    borderRadius: 10,
    '&:hover': {
      backgroundColor: colors['redCrayola'],
    },
    // [theme.breakpoints.down('xs')]: {
    //   height: 45,
    //   width: 200,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   height: 50,
    //   width: 225,
    // },
    // [theme.breakpoints.up('md')]: {
    //   height: 60,
    //   width: 260,
    // },
  },
  buttonText: {
    color: 'white',
  },
}))

export default useStyles