// CONSTANTS
import colors from 'constants/colors'

// MATERIAL UI CORES
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

// MATERIAL UI STYLES
import { styled } from '@mui/material/styles'

const CustomTooltipContacts = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: colors.blueNCS,
    color: 'white',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    width: 150,
    height: 40,
  },
}))

export default CustomTooltipContacts