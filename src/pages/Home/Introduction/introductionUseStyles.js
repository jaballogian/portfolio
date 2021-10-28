// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  introdutionRoot: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    position: 'relative',
  },
  section: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleAndCaption: {
    maxWidth: '80%',
  },
  title: {
    marginBottom: '20px',
  },
  blueText: {
    display: 'inline',
    color: colors.blueNCS,
  },
  caption: {
    color: colors.slateGray,
  },
  illustration: {
    width: '85%',
  },
}))

export default useStyles