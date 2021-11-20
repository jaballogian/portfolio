// CONSTANTS
import colors from 'constants/colors'

// IMAGES
import IllustrationLegos from 'assets/images/illustrations/hard_skill_legos.svg'
import IllustrationCode from 'assets/images/illustrations/hard_skill_code.svg'
import IllustrationTiles from 'assets/images/illustrations/hard_skill_tiles.svg'

// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  hardSkillRoot: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 100px',
    position: 'relative',
    [theme.breakpoints.only('xs')]: {
      padding: '50px 25px 75px 25px',
      height: 'unset',
    },
    [theme.breakpoints.only('sm')]: {
      padding: 50,
      height: 'unset',
    },
    [theme.breakpoints.only('md')]: {
      padding: 75,
      height: 'unset',
      minHeight: 750,
    },
    [theme.breakpoints.only('lg')]: {
      padding: '0px 75px',
      minHeight: 750,
    },
  },
  itemContainer: {
    margin: '0px auto',
    borderRadius: 20,
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
    transform: 'scale(1)',
    transition: 'transform 0.25s ease-in-out',
    backgroundColor: 'white',
    '&:hover': {
      transform: 'scale(1.025)',
      transition: 'transform 0.25s ease-in-out',
    },
    [theme.breakpoints.only('xs')]: {
      width: 300,
      height: 480,
      margin: '20px auto',
    },
    [theme.breakpoints.only('sm')]: {
      width: 400,
      height: 600,
      margin: '20px auto',
    },
    [theme.breakpoints.only('md')]: {
      width: 400,
      height: 600,
      margin: '30px auto',
    },
    [theme.breakpoints.only('lg')]: {
      width: '90%',
      height: 600,
    },
    [theme.breakpoints.only('xl')]: {
      width: 400,
      height: 600,
    },
  },
  itemTitleContainer: {
    width: '100%',
    height: 220,
    borderRadius: '20px 20px 0px 0px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 100px',
    backgroundSize: '85%',
    [theme.breakpoints.only('xs')]: {
      height: 160,
      backgroundPosition: 'center 80px',
    },
    [theme.breakpoints.only('lg')]: {
      height: 200,
      backgroundPosition: 'center 100px',
    },
  },
  itemBackground0: {
    backgroundColor: colors.paradisePink,
    backgroundImage: `url(${IllustrationLegos})`,
  },
  itemBackground1: {
    backgroundColor: colors.orangeYellowCrayota,
    backgroundImage: `url(${IllustrationCode})`,
  },
  itemBackground2: {
    backgroundColor: colors.carribeanGreen,
    backgroundImage: `url(${IllustrationTiles})`,
  },
  itemTitle: {
    textAlign: 'center',
    paddingTop: 45,
    [theme.breakpoints.only('xs')]: {
      paddingTop: 25,
    },
    [theme.breakpoints.only('sm')]: {
      paddingTop: 30,
    },
    [theme.breakpoints.only('lg')]: {
      paddingTop: 40,
    },
  },
  itemContentText: {
    margin: '0px 40px 15px 40px',
    '&:first-child': {
      marginTop: 40,
    },
    [theme.breakpoints.only('xs')]: {
      margin: '0px 20px 15px 20px',
      '&:first-child': {
        marginTop: 20,
      },
    },
  },
  backgroundText: {
    height: 155,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      height: 50,
    },
    [theme.breakpoints.only('sm')]: {
      height: 67.5,
    },
    [theme.breakpoints.only('md')]: {
      height: 75,
    },
    [theme.breakpoints.only('lg')]: {
      height: 85,
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: 175,
    },
  },
}))

export default useStyles