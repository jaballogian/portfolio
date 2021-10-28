// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  introdutionRoot: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    bomdizing: 'border-box',
    display: 'flex',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  section: {
    width: '50%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  titleAndCaption: {
    maxWidth: '80%',
  },
  title: {
    marginBottom: 20,
  },
  blueText: {
    display: 'inline',
    color: colors.blueNCS,
  },
  caption: {
    color: colors.slateGray,
  },
  illustrationSection: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  illustration: {
    width: '85%',
  },
}))

export default useStyles