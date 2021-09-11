// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    transform: 'translate(0px, -75px)',
  },
}))

export default useStyles