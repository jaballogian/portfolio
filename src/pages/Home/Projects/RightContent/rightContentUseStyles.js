// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    paddingLeft: 50,
  },
  rootMobile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rootDesktopOrOther: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    backgroundColor: 'gainsboro',
    borderRadius: 20,
  },
  placeholderMobile: {
    width: 360,
    height: 640,
  },
  placeholderDesktopOrOther: {
    width: 560,
    height: 360,
    margin: '20px 0px',
  },
}))

export default useStyles