// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    paddingLeft: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeholder: {
    width: 360,
    height: 640,
    backgroundColor: 'gainsboro',
    borderRadius: 20,
  },
}))

export default useStyles