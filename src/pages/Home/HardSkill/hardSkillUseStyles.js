// IMAGES
import IllustrationLegos from '../../../assets/images/illustrations/hard_skill_legos.svg'
import IllustrationCode from '../../../assets/images/illustrations/hard_skill_code.svg'
import IllustrationTiles from '../../../assets/images/illustrations/hard_skill_tiles.svg'

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

// UTILS
import colors from '../../../utils/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: 400,
    height: 600,
    margin: '0px auto',
    borderRadius: 20,
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
  },
  itemTitleContainer: {
    width: '100%',
    height: 220,
    borderRadius: '20px 20px 0px 0px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 100px',
  },
  itemBackground0: {
    backgroundColor: colors['paradisePink'],
    backgroundImage: `url(${IllustrationLegos})`,
  },
  itemBackground1: {
    backgroundColor: colors['orangeYellowCrayota'],
    backgroundImage: `url(${IllustrationCode})`,
  },
  itemBackground2: {
    backgroundColor: colors['carribeanGreen'],
    backgroundImage: `url(${IllustrationTiles})`,
  },
  itemTitle: {
    textAlign: 'center',
    paddingTop: 45,
  },
  itemContentText: {
    margin: '0px 45px 10px 45px',
  },
  itemContentFirst: {
    marginTop: 45,
  },
  itemContentLast: {
    marginBottom: 45,
  },
}))

export default useStyles