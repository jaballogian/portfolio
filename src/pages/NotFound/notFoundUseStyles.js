// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  notFoundRoot: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  caption: {
    color: colors.cadetBlueCrayola,
  },
  title: {
    color: 'black',
  },
  image: {},
  linkText: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: colors.paradisePink,
    textTransform: 'none',
    borderRadius: 10,
    '&:hover': {
      backgroundColor: colors.redCrayola,
    },
  },
  buttonText: {
    color: 'white',
  },
}))

export default useStyles