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
    [theme.breakpoints.only('lg')]: {
      marginBottom: 32,
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: 40,
    },
  },
  typeContainer: {
    display: 'flex',
    [theme.breakpoints.only('lg')]: {
      marginBottom: 32,
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: 40,
    },
  },
  typeItem: {
    backgroundColor: colors['carribeanGreen'],
    width: 225,
    height: 50,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.only('lg')]: {
      marginRight: 20,
    },
    [theme.breakpoints.up('xl')]: {
      marginRight: 25,
    },
  },
  typeText: {
    color: 'white',
  },
  technologies: {
    color: colors['slateGray'],
    height: 80,
    [theme.breakpoints.only('lg')]: {
      marginBottom: 32,
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: 40,
    },
  },
}))

export default useStyles