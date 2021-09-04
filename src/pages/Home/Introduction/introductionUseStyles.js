// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

// UTILS
import colors from '../../../utils/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '0px 35px',
    },
    [theme.breakpoints.only('sm')]: {
      padding: '0px 70px',
    },
    [theme.breakpoints.only('md')]: {
      padding: '0px 105px',
    },
    [theme.breakpoints.only('lg')]: {
      padding: '0px 140px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0px 175px',
    },
  },
  title: {
    marginBottom: 20,
  },
  blueText: {
    color: colors['blueNCS'],
  }
}))

export default useStyles