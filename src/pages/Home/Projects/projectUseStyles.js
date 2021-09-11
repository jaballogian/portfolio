// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    minHeight: 800,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
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