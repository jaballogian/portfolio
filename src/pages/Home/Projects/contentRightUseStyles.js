// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  contentRightRoot: {
    width: '100%',
    boxSizing: 'border-box',
    // [theme.breakpoints.down('xs')]: {
    //   // height: '50vh',
    //   minHeight: 400,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   // height: '62.5vh',
    //   minHeight: 500,
    // },
    // [theme.breakpoints.only('md')]: {
    //   // height: '75vh',
    //   minHeight: 600,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   height: '100vh',
    //   paddingLeft: 40,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   height: '100vh',
    //   paddingLeft: 50,
    // },
  },
  rootMobile: {
    display: 'flex',
    position: 'relative',
    // [theme.breakpoints.down('xs')]: {
    //   alignItems: 'center',
    // },
    // [theme.breakpoints.only('sm')]: {
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    // [theme.breakpoints.only('md')]: {
    //   justifyContent: 'center',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   alignItems: 'center',
    // },
  },
  rootDesktopOrOther: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // [theme.breakpoints.down('sm')]: {
    //   justifyContent: 'center',
    // },
    // [theme.breakpoints.only('md')]: {
    //   justifyContent: 'flex-start',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   justifyContent: 'center',
    // },
  },
  placeholderMobile: {
    // W:H = 9:16
    // [theme.breakpoints.down('xs')]: {
    //   // ONE IS 22
    //   width: 198,
    //   height: 352,
    //   position: 'absolute',
    // },
    // [theme.breakpoints.only('sm')]: {
    //   // ONE IS 24
    //   width: 216,
    //   height: 384,
    //   margin: '0px 20px',
    // },
    // [theme.breakpoints.only('md')]: {
    //   // ONE IS 28
    //   width: 252,
    //   height: 448,
    //   margin: '0px 20px',
    // },
    // [theme.breakpoints.only('lg')]: {
    //   // ONE IS 32
    //   width: 288,
    //   height: 512,
    //   position: 'absolute',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   // ONE IS 40
    //   width: 360,
    //   height: 640,
    //   position: 'absolute',
    // },
  },
  secondPlaceholderPhone: {
    // [theme.breakpoints.down('xs')]: {
    //   right: 0,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   right: 0,
    // },
  },
  placeholderDesktopOrOther: {
    // W:H = 16:9
    // [theme.breakpoints.down('xs')]: {
    //   // ONE IS 18
    //   width: 288,
    //   height: 162,
    //   marginBottom: 20,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   // ONE IS 22
    //   width: 352,
    //   height: 198,
    //   marginBottom: 20,
    // },
    // [theme.breakpoints.only('md')]: {
    //   // ONE IS 25
    //   width: 400,
    //   height: 225,
    //   marginBottom: 20,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   // ONE IS 30
    //   width: 480,
    //   height: 270,
    //   marginBottom: 40,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   // ONE IS 35
    //   width: 560,
    //   height: 315,
    //   marginBottom: 40,
    // },
  },
  secondPlaceholderDesktop: {
    marginBottom: 0,
  },
}))

export default useStyles