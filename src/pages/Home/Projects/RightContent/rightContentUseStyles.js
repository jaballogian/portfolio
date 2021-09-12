// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    boxSizing: 'border-box',
    [theme.breakpoints.only('md')]: {
      height: '75vh',
      minHeight: 600,
    },
    [theme.breakpoints.only('lg')]: {
      height: '100vh',
      paddingLeft: 40,
    },
    [theme.breakpoints.up('xl')]: {
      height: '100vh',
      paddingLeft: 50,
    },
  },
  rootMobile: {
    display: 'flex',
    position: 'relative',
    [theme.breakpoints.only('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      alignItems: 'center',
    },
  },
  rootDesktopOrOther: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.only('md')]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'center',
    },
  },
  placeholderMobile: {
    // W:H = 9:16
    [theme.breakpoints.only('md')]: {
      // ONE IS 28
      width: 252,
      height: 448,
      margin: '0px 20px',
    },
    [theme.breakpoints.only('lg')]: {
      // ONE IS 32
      width: 288,
      height: 512,
      position: 'absolute',
    },
    [theme.breakpoints.up('xl')]: {
      // ONE IS 40
      width: 360,
      height: 640,
      position: 'absolute',
    },
  },
  secondPlaceholderPhone: {
    [theme.breakpoints.up('lg')]: {
      right: 0,
    },
  },
  placeholderDesktopOrOther: {
    // W:H = 16:9
    margin: '20px 0px',
    [theme.breakpoints.only('md')]: {
      // ONE IS 25
      width: 400,
      height: 225,
    },
    [theme.breakpoints.only('lg')]: {
      // ONE IS 30
      width: 480,
      height: 270,
    },
    [theme.breakpoints.up('xl')]: {
      // ONE IS 35
      width: 560,
      height: 315,
    },
  },
}))

export default useStyles