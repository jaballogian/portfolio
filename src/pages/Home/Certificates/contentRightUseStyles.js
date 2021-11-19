// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  contentRightRoot: {
    width: '50vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 100,
    paddingLeft: 25,
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      height: '100vh',
      minHeight: 600,
      padding: 25,
    },
    [theme.breakpoints.only('sm')]: {
      width: '100%',
      height: '100vh',
      minHeight: 750,
      padding: '50px 75px',
    },
    [theme.breakpoints.only('md')]: {
      height: '100vh',
      minHeight: 750,
    },
  },
  title: {
    marginBottom: 25,
    [theme.breakpoints.only('xs')]: {
      marginBottom: 15,
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: 15,
    },
  },
  typeContainer: {
    display: 'flex',
    marginBottom: 25,
    [theme.breakpoints.only('xs')]: {
      marginBottom: 15,
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: 15,
    },
  },
  typeItem: {
    backgroundColor: colors.carribeanGreen,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: 175,
    height: 40,
    color: 'white',
    '&:last-child': {
      marginRight: 0,
    },
  },
  providers: {
    color: colors.slateGray,
    marginBottom: 40,
    [theme.breakpoints.only('xs')]: {
      height: 55,
      marginBottom: 15,
    },
    [theme.breakpoints.only('sm')]: {
      height: 55,
      marginBottom: 15,
    },
    [theme.breakpoints.only('md')]: {
      marginBottom: 20,
    },
    [theme.breakpoints.only('lg')]: {
      marginBottom: 30,
    },
  },
  description: {
    colors: 'black',
    marginBottom: 40,
    height: 175,
    [theme.breakpoints.only('xs')]: {
      height: 250,
    },
    [theme.breakpoints.only('md')]: {
      height: 275,
    },
    [theme.breakpoints.only('lg')]: {
      height: 200,
    },
  },
}))

export default useStyles