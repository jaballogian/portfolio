// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      padding: '0px 25px',
    },
    [theme.breakpoints.only('sm')]: {
      padding: '0px 50px',
    },
    [theme.breakpoints.only('md')]: {
      padding: '0px 75px',
    },
    [theme.breakpoints.only('lg')]: {
      padding: '0px 100px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0px 125px',
    },
  },
}))

export default useStyles