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
    paddingLeft: 100,
    [theme.breakpoints.only('xs')]: {
      paddingLeft: 0,
      width: '100%',
    },
    [theme.breakpoints.only('sm')]: {
      paddingLeft: 75,
      width: '100%',
    },
    [theme.breakpoints.only('md')]: {
      paddingLeft: 75,
    },
  },
  titleAndCaption: {
    maxWidth: '90%',
    [theme.breakpoints.only('xs')]: {
      maxWidth: '80%',
    },
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
    paddingLeft: 0,
    paddingRight: 100,
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.only('sm')]: {
      display: 'none',
      paddingRight: 75,
    },
    [theme.breakpoints.only('md')]: {
      paddingRight: 75,
    },
  },
  illustration: {
    width: '100%',
    maxWidth: 650,
  },
  backgroundText: {
    height: 152.5,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      height: 105,
    },
    [theme.breakpoints.only('sm')]: {
      height: 140,
    },
    [theme.breakpoints.only('md')]: {
      height: 75,
    },
    [theme.breakpoints.only('lg')]: {
      height: 82.5,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 175,
    },
  },
}))

export default useStyles