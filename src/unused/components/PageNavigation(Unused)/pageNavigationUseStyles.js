// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

// UTILS
import colors from '../../../utils/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors['cultured'],
    borderRadius: '50%',
    margin: '0px 12.5px',
    cursor: 'pointer',
  },
  text: {
    color: colors['slateGray'],
  },
  containerHovered: {
    backgroundColor: colors['slateGray'],
  },
  textHovered: {
    color: colors['cultured'],
  },
  containerCurrentPage: {
    backgroundColor: colors['orangeYellowCrayota'],
  },
  textCurrentPage: {
    color: 'black',
  },
}))

export default useStyles