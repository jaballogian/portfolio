// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

// UTILS
import colors from '../../../../../utils/colors'

const useStyles = makeStyles((theme) => ({
  topContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.only('md')]: {
      height: '37.5vh',
      minHeight: 300,
    },
    [theme.breakpoints.only('lg')]: {
      height: '50vh',
    },
    [theme.breakpoints.up('xl')]: {
      height: '50vh',
    },
  },
  title: {
    [theme.breakpoints.only('md')]: {
      marginBottom: 24,
    },
    [theme.breakpoints.only('lg')]: {
      marginBottom: 32,
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: 40,
    },
  },
  typeContainer: {
    display: 'flex',
    [theme.breakpoints.only('md')]: {
      marginBottom: 24,
    },
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
    [theme.breakpoints.only('md')]: {
      marginRight: 15,
    },
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
    [theme.breakpoints.only('md')]: {
      marginBottom: 24,
    },
    [theme.breakpoints.only('lg')]: {
      height: 80,
      marginBottom: 32,
    },
    [theme.breakpoints.up('xl')]: {
      height: 80,
      marginBottom: 40,
    },
  },
}))

export default useStyles