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
      flexDirection: 'column',
      height: 'unset',
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
  },
}))

export default useStyles