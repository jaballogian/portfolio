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
    backgroundColor: colors.cultured,
    color: colors.slateGray,
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 150,
    padding: 10,
  },
}))

export default CustomTooltipContacts