// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

// UTILS
import colors from '../../../../../utils/colors'

const useStyles = makeStyles((theme) => ({
  topContainer: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  title: {
    marginBottom: 40,
  },
  typeContainer: {
    backgroundColor: colors['carribeanGreen'],
    width: 225,
    height: 50,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    marginBottom: 50,
  },
  typeText: {
    color: 'white',
  },
  technologies: {
    color: colors['slateGray'],
    marginBottom: 50,
  },
}))

export default useStyles