// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  iconToggleContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1,
    height: 50,
    width: 50,
  },
  navigationContainer: {
    position: 'fixed',
    zIndex: 1,
    backgroundColor: 'white',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  headerRoot: {
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  headerSectionText: {
    marginRight: 0,
    marginBottom: 50,
    '&:last-child': {
      marginBottom: 0,
    },
    '&::after': {
      display: 'none',
    },
  },
}))

export default useStyles