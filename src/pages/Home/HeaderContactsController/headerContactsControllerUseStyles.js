// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  iconToggleContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1,
  },
  navigationContainer: {
    position: 'fixed',
    zIndex: 1,
    backgroundColor: 'white',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
}))

export default useStyles