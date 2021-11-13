// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
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
}))

export default useStyles