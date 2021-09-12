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
      fontSize: 24,
      '&:hover': {
        backgroundColor: colors['slateGray'],
        color: colors['cultured'],
      },
      [theme.breakpoints.down('sm')]: {
        height: 40,
        width: 40,
        margin: '0px 10px',
      },
      [theme.breakpoints.up('md')]: {
        height: 50,
        width: 50,
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
      [theme.breakpoints.down('sm')]: {
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