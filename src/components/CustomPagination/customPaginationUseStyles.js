// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

// UTILS
import colors from '../../utils/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaginationItem-root': {
      backgroundColor: colors['cultured'],
      color: colors['slateGray'],
      height: 50,
      width: 50,
      borderRadius: '50%',
      margin: '0px 12.5px',
      fontSize: 24,
      '&:hover': {
        backgroundColor: colors['slateGray'],
        color: colors['cultured'],
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
      height: 50,
      width: 50,
      borderRadius: 32,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}))

export default useStyles