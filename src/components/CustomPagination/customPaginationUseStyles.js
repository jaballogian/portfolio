// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

// UTILS
import colors from '../../utils/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    '& .MuiPaginationItem-root': {
      backgroundColor: colors['cultured'],
      color: colors['slateGray'],
      borderRadius: '50%',
      '&:hover': {
        backgroundColor: colors['slateGray'],
        color: colors['cultured'],
      },
      [theme.breakpoints.down('xs')]: {
        height: 30,
        width: 30,
        fontSize: 20,
        margin: '0px 7.5px',
      },
      [theme.breakpoints.only('sm')]: {
        height: 40,
        width: 40,
        fontSize: 24,
        margin: '0px 10px',
      },
      [theme.breakpoints.up('md')]: {
        height: 50,
        width: 50,
        fontSize: 24,
        margin: '0px 12.5px',
      },
    },
    '& .Mui-selected': {
      backgroundColor: colors['orangeYellowCrayota'],
      color: 'black',
      '&:hover': {
        backgroundColor: colors['orangeYellowCrayota'],
        color: 'black',
      },
    },
    '& .MuiPaginationItem-ellipsis': {
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        height: 30,
        width: 30,
      },
      [theme.breakpoints.only('sm')]: {
        height: 40,
        width: 40,
      },
      [theme.breakpoints.up('md')]: {
        height: 50,
        width: 50,
      },
    },
  },
}))

export default useStyles