// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    [theme.breakpoints.only('lg')]: {
      paddingLeft: 40,
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 50,
    },
  },
  rootMobile: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  rootDesktopOrOther: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderMobile: {
    // W:H = 9:16
    position: 'absolute',
    [theme.breakpoints.only('lg')]: {
      // ONE IS 32
      width: 288,
      height: 512,
    },
    [theme.breakpoints.up('xl')]: {
      // ONE IS 40
      width: 360,
      height: 640,
    },
  },
  secondPlaceholderPhone: {
    right: 0,
  },
  placeholderDesktopOrOther: {
    // W:H = 16:9
    margin: '20px 0px',
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