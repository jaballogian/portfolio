// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    boxSizing: 'border-box',
    [theme.breakpoints.only('md')]: {
      height: '75vh',
      minHeight: 600,
    },
    [theme.breakpoints.only('lg')]: {
      paddingRight: 40,
    },
    [theme.breakpoints.up('xl')]: {
      paddingRight: 50,
    },
  },
}))

export default useStyles