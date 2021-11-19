// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  contentLeftRoot: {
    width: '50vw',
    height: '100%',
    padding: '100px 25px 100px 100px',
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
    },
  },
  placeholderRoot: {
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
  placeholder: {
    // W:H = 16:9
    maxWidth: '100%',
    position: 'absolute',
    [theme.breakpoints.only('xs')]: {
      // ONE IS 18
      width: 288,
      marginBottom: 20,
    },
    [theme.breakpoints.only('sm')]: {
      // ONE IS 22
      width: 352,
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
  },
  placeholderSingle: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    marginBottom: 'unset',
  },
  placeholderMultiple: {
    top: 0,
    [theme.breakpoints.only('xs')]: {
      top: 'unset',
      position: 'unset',
    },
    [theme.breakpoints.only('sm')]: {
      top: 'unset',
      position: 'unset',
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