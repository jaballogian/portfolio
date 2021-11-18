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
  },
  title: {
    marginBottom: 25,
  },
  typeContainer: {
    display: 'flex',
    marginBottom: 25,
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
  },
  description: {
    colors: 'black',
    marginBottom: 40,
    height: 175,
  },
}))

export default useStyles