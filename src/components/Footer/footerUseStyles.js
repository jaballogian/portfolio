// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    backgroundColor: colors.blueNCS,
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  copyright: {
    color: 'white',
    textAlign: 'center',
  },
}))

export default useStyles