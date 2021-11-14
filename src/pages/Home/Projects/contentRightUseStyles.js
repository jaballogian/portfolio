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
      minHeight: 750,
      padding: '0px 25px 0px 25px',
    },
    [theme.breakpoints.only('sm')]: {
      width: '100%',
      height: '100vh',
      minHeight: 750,
      padding: '0px 75px 100px 75px',
    },
    [theme.breakpoints.only('md')]: {
      paddingRight: 75,
      paddingLeft: 50,
    },
    [theme.breakpoints.only('lg')]: {
      paddingLeft: 50,
      paddingRight: 50,
    },
  },
  rootMobile: {
    display: 'flex',
    position: 'relative',
    [theme.breakpoints.only('xs')]: {
      alignItems: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.only('md')]: {
      alignItems: 'center',
    },
    [theme.breakpoints.only('lg')]: {
      alignItems: 'center',
    },
    [theme.breakpoints.only('xl')]: {
      alignItems: 'center',
    },
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
    [theme.breakpoints.only('xs')]: {
      // ONE IS 22
      width: 198,
      height: 352,
      position: 'absolute',
    },
    [theme.breakpoints.only('sm')]: {
      // ONE IS 24
      width: 216,
      height: 384,
      margin: '0px 20px',
    },
    [theme.breakpoints.only('md')]: {
      // ONE IS 28
      width: 252,
      height: 448,
      position: 'absolute',
    },
    [theme.breakpoints.only('lg')]: {
      // ONE IS 32
      width: 288,
      height: 512,
      position: 'absolute',
    },
    [theme.breakpoints.only('xl')]: {
      // ONE IS 36
      width: 324,
      height: 576,
      position: 'absolute',
    },
    '&:last-child': {
      [theme.breakpoints.only('xs')]: {
        right: 0,
      },
      [theme.breakpoints.only('md')]: {
        right: 0,
      },
      [theme.breakpoints.only('lg')]: {
        right: 0,
      },
      [theme.breakpoints.only('xl')]: {
        right: 0,
      },
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