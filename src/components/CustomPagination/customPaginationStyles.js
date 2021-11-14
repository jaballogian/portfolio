// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  customPaginationRoot: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    '& .MuiPaginationItem-root': {
      margin: '0px 5px',
      backgroundColor: colors.cultured,
      color: colors.slateGray,
      borderRadius: '50%',
      '&:hover': {
        backgroundColor: colors.slateGray,
        color: colors.cultured,
      },
      [theme.breakpoints.only('xs')]: {
        height: 30,
        width: 30,
        fontSize: 20,
      },
      [theme.breakpoints.only('sm')]: {
        height: 40,
        width: 40,
        fontSize: 21,
      },
      [theme.breakpoints.up('md')]: {
        height: 50,
        width: 50,
        fontSize: 24,
      },
    },
    '& .Mui-selected': {
      backgroundColor: colors.orangeYellowCrayota,
      color: 'black',
      '&:hover': {
        backgroundColor: colors.orangeYellowCrayota,
        color: 'black',
      },
    },
    '& .MuiPaginationItem-ellipsis': {
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.only('xs')]: {
        height: 30,
        width: 30,
        fontSize: 20,
        margin: '0px 7.5px',
      },
      [theme.breakpoints.only('sm')]: {
        height: 40,
        width: 40,
        fontSize: 21,
        margin: '0px 10px',
      },
      [theme.breakpoints.up('md')]: {
        height: 50,
        width: 50,
        fontSize: 24,
        margin: '0px 10px',
      },
    },
  },
}))

export default useStyles