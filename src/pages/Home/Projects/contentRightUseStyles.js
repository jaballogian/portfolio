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
    position: 'relative',
    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  rootDesktopOrOther: {
    height: '100%',
    position: 'relative',
    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  placeholderMobile: {
    // W:H = 9:16
    left: 0,
    top: 0,
    position: 'absolute',
    filter: 'drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))',
    transform: 'scale(1)',
    transition: 'transform 0.25s ease-in-out',
    '&:hover': {
      transform: 'scale(1.125)',
      transition: 'transform 0.25s ease-in-out',
    },
    [theme.breakpoints.only('xs')]: {
      // ONE IS 22
      width: 198,
      height: 352,
      top: 'unset',
    },
    [theme.breakpoints.only('sm')]: {
      // ONE IS 24
      width: 216,
      height: 384,
      top: 'unset',
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
      left: 'unset',
      right: 0,
      top: 'unset',
      bottom: 0,
      [theme.breakpoints.only('xs')]: {
        bottom: 'unset',
      },
      [theme.breakpoints.only('sm')]: {
        bottom: 'unset',
      },
    },
  },
  placeholderDesktopOrOther: {
    // W:H = 16:9
    top: 0,
    maxWidth: '100%',
    position: 'absolute',
    filter: 'drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))',
    transform: 'scale(1)',
    transition: 'transform 0.25s ease-in-out',
    '&:hover': {
      transform: 'scale(1.125)',
      transition: 'transform 0.25s ease-in-out',
    },
    [theme.breakpoints.only('xs')]: {
      // ONE IS 18
      width: 288,
      top: 'unset',
      position: 'unset',
      marginBottom: 20,
    },
    [theme.breakpoints.only('sm')]: {
      // ONE IS 22
      width: 352,
      top: 'unset',
      position: 'unset',
      marginBottom: 40,
    },
    [theme.breakpoints.only('md')]: {
      // ONE IS 25
      width: 400,
    },
    [theme.breakpoints.only('lg')]: {
      // ONE IS 30
      width: 480,
    },
    [theme.breakpoints.only('xl')]: {
      // ONE IS 35
      width: 560,
    },
    '&:last-child': {
      right: 0,
      top: 'unset',
      bottom: 0,
      marginBottom: 'unset',
    },
  },
}))

export default useStyles