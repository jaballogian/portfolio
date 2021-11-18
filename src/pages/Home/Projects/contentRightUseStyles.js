// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  contentRightRoot: {
    width: '50vw',
    height: '100%',
    padding: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      height: '100vh',
      minHeight: 600,
      padding: '50px 25px',
    },
    [theme.breakpoints.only('sm')]: {
      width: '100%',
      height: '100vh',
      minHeight: 750,
      padding: '75px 75px 100px 75px',
    },
    [theme.breakpoints.only('md')]: {
      height: '100vh',
      minHeight: 750,
      paddingRight: 75,
      paddingLeft: 50,
    },
    [theme.breakpoints.only('lg')]: {
      paddingLeft: 50,
      paddingRight: 50,
    },
  },
  rootMobile: {
    height: '100%',
    display: 'flex',
    position: 'relative',
  },
  rootDesktopOrOther: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.only('md')]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'center',
    },
  },
  placeholderMobile: {
    // W:H = 9:16
    top: 0,
    position: 'absolute',
    [theme.breakpoints.only('xs')]: {
      // ONE IS 22
      width: 198,
      height: 352,
    },
    [theme.breakpoints.only('sm')]: {
      // ONE IS 24
      width: 216,
      height: 384,
    },
    [theme.breakpoints.only('md')]: {
      // ONE IS 28
      width: 252,
      height: 448,
    },
    [theme.breakpoints.only('lg')]: {
      // ONE IS 32
      width: 288,
      height: 512,
    },
    [theme.breakpoints.only('xl')]: {
      // ONE IS 36
      width: 324,
      height: 576,
    },
    '&:last-child': {
      right: 0,
      top: 'unset',
      bottom: 0,
    },
  },
  placeholderDesktopOrOther: {
    // W:H = 16:9
    [theme.breakpoints.only('xs')]: {
      // ONE IS 18
      width: 288,
      height: 162,
      marginBottom: 20,
    },
    [theme.breakpoints.only('sm')]: {
      // ONE IS 22
      width: 352,
      height: 198,
      marginBottom: 20,
    },
    [theme.breakpoints.only('md')]: {
      // ONE IS 25
      width: 400,
      height: 225,
      marginBottom: 20,
    },
    [theme.breakpoints.only('lg')]: {
      // ONE IS 30
      width: 480,
      height: 270,
      marginBottom: 40,
    },
    [theme.breakpoints.only('xl')]: {
      // ONE IS 35
      width: 560,
      height: 315,
      marginBottom: 40,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
}))

export default useStyles