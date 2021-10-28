// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI CORES
import { alpha } from '@mui/material/styles'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  backgroundText: {
    color: alpha(colors.blueNCS, 0.1),
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    height: 167.5,
    fontSize: '175px !important',
    overflow: 'hidden',
    zIndex: 0,
    lineHeight: 1,
  },
}))

export default useStyles