// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  stackoverflowBadgesRoot: {
    position: 'absolute',
    right: 50,
    bottom: 100,
    cursor: 'pointer',
    [theme.breakpoints.only('sm')]: {
      right: 30,
    },
    [theme.breakpoints.only('md')]: {
      right: 30,
    },
    [theme.breakpoints.only('lg')]: {
      right: 30,
    },
  },
  badgesItemContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    marginRight: 10,
  },
  text: {
    lineHeight: 1.2,
  },
}))

export default useStyles