// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  leftContentRoot: {
    width: '100%',
    boxSizing: 'border-box',
    // [theme.breakpoints.down('xs')]: {
    //   // height: '75vh',
    //   minHeight: 600,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   // height: '75vh',
    //   minHeight: 600,
    // },
    // [theme.breakpoints.only('md')]: {
    //   // height: '75vh',
    //   minHeight: 600,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   paddingRight: 40,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   paddingRight: 50,
    // },
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // [theme.breakpoints.down('xs')]: {
    //   // height: '37.5vh',
    //   minHeight: 300,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   // height: '37.5vh',
    //   minHeight: 300,
    // },
    // [theme.breakpoints.only('md')]: {
    //   // height: '37.5vh',
    //   minHeight: 300,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   height: '50vh',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   height: '50vh',
    // },
  },
  title: {
    // [theme.breakpoints.down('sm')]: {
    //   marginBottom: 16,
    // },
    // [theme.breakpoints.only('md')]: {
    //   marginBottom: 24,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   marginBottom: 32,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   marginBottom: 40,
    // },
  },
  typeContainer: {
    display: 'flex',
    // [theme.breakpoints.down('sm')]: {
    //   marginBottom: 16,
    // },
    // [theme.breakpoints.only('md')]: {
    //   marginBottom: 24,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   marginBottom: 32,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   marginBottom: 40,
    // },
  },
  typeItem: {
    backgroundColor: colors['carribeanGreen'],
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // [theme.breakpoints.down('xs')]: {
    //   marginRight: 10,
    //   width: 150,
    //   height: 40,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   marginRight: 10,
    //   width: 200,
    //   height: 40,
    // },
    // [theme.breakpoints.only('md')]: {
    //   marginRight: 15,
    //   width: 225,
    //   height: 50,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   marginRight: 20,
    //   width: 225,
    //   height: 50,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   marginRight: 25,
    //   width: 225,
    //   height: 50,
    // },
  },
  typeText: {
    color: 'white',
  },
  technologies: {
    color: colors['slateGray'],
    // [theme.breakpoints.down('xs')]: {
    //   height: 90,
    //   marginBottom: 16,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   height: 80,
    //   marginBottom: 16,
    // },
    // [theme.breakpoints.only('md')]: {
    //   marginBottom: 24,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   height: 80,
    //   marginBottom: 32,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   height: 80,
    //   marginBottom: 40,
    // },
  },
  bottomContentRoot: {
    // [theme.breakpoints.down('xs')]: {
    //   // height: '37.5vh',
    //   minHeight: 300,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   // height: '37.5vh',
    //   minHeight: 300,
    // },
    // [theme.breakpoints.only('md')]: {
    //   // height: '37.5vh',
    //   minHeight: 300,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   height: '50vh',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   height: '50vh',
    // },
  },
  description: {
    colors: 'black',
    // [theme.breakpoints.down('sm')]: {
    //   marginBottom: 16,
    //   height: 200,
    // },
    // [theme.breakpoints.only('md')]: {
    //   marginBottom: 24,
    //   height: 160,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   marginBottom: 32,
    //   height: 160,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   marginBottom: 40,
    //   height: 160,
    // },
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
  exploreMoreText: {
    color: 'white',
  },
}))

export default useStyles