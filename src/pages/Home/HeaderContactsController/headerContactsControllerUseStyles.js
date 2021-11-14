// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  iconToggleContainer: {
    position: 'fixed',
    right: 20,
    top: 20,
    zIndex: 1,
  },
  navigationContainer: {
    position: 'fixed',
    zIndex: 2,
    backgroundColor: 'white',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    transform: 'translateX(0%)',
    transition: 'transform 0.25s ease-in-out',
  },
  hidden: {
    transform: 'translateX(-100%)',
    transition: 'transform 0.25s ease-in-out',
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
  contactsRoot: {
    flexDirection: 'row',
    left: '50%',
    bottom: 20,
    transform: 'translateX(-50%)',
  },
  contactsIconContainer: {
    marginBottom: 0,
    marginRight: 15,
    '&:last-child': {
      marginRight: 0,
    },
  },
}))

export default useStyles