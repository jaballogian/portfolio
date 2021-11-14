// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  projectsRoot: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      height: 'unset',
    },
    [theme.breakpoints.only('sm')]: {
      flexDirection: 'column',
      height: 'unset',
    },
    [theme.breakpoints.only('md')]: {
      height: 'unset',
      minHeight: 850,
    },
    [theme.breakpoints.only('lg')]: {
      minHeight: 750,
    },
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0px)',
    bottom: 100,
    zIndex: 1,
    [theme.breakpoints.only('sm')]: {
      bottom: 60,
    },
    [theme.breakpoints.only('md')]: {
      bottom: 60,
    },
    [theme.breakpoints.only('lg')]: {      
      bottom: 75,
    },
  },
  backgroundText: {
    height: 155,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      height: 107.5,
    },
    [theme.breakpoints.only('sm')]: {
      height: 67.5,
    },
    [theme.breakpoints.only('md')]: {
      height: 75,
    },
    [theme.breakpoints.only('lg')]: {
      height: 85,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 175,
    },
  },
}))

export default useStyles