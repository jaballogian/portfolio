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
    // [theme.breakpoints.down('xs')]: {
    //   // height: '125vh',
    //   minHeight: 1200,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   // height: '125vh',
    //   minHeight: 1200,
    // },
    // [theme.breakpoints.only('md')]: {
    //   // height: '150vh',
    //   minHeight: 1200,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   height: '100vh',
    //   minHeight: 800,
    // },
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0px)',
    bottom: 25,
    zIndex: 1,
  },
}))

export default useStyles