// CONSTANTS
import colors from 'constants/colors'

// IMAGES
import IllustrationLegos from 'assets/images/illustrations/hard_skill_legos.svg'
import IllustrationCode from 'assets/images/illustrations/hard_skill_code.svg'
import IllustrationTiles from 'assets/images/illustrations/hard_skill_tiles.svg'

const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // [theme.breakpoints.only('xs')]: {
    //   padding: '12.5px 0px',
    // },
    // [theme.breakpoints.only('sm')]: {
    //   padding: '25px 0px',
    // },
    // [theme.breakpoints.only('md')]: {
    //   padding: '37.5px 0px',
    // },
  },
  itemContainer: {
    // [theme.breakpoints.down('xs')]: {
    //   width: 300,
    //   height: 440,
    //   marginTop: '12.5px',
    //   marginBottom: '12.5px',
    // },
    // [theme.breakpoints.only('sm')]: {
    //   width: 400,
    //   height: 550,
    //   marginTop: '25px',
    //   marginBottom: '25px',
    // },
    // [theme.breakpoints.only('md')]: {
    //   width: 400,
    //   height: 600,
    //   marginTop: '37.5px',
    //   marginBottom: '37.5px',
    // },
    // [theme.breakpoints.only('lg')]: {
    //   width: '85%',
    //   height: 600,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   width: 400,
    //   height: 600,
    // },
    margin: '0px auto',
    borderRadius: 20,
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
    transform: 'scale(1)',
    transition: 'transform 0.25s ease-in-out',
    '&:hover': {
      transform: 'scale(1.025)',
      transition: 'transform 0.25s ease-in-out',
    },
  },
  itemTitleContainer: {
    width: '100%',
    height: 220,
    borderRadius: '20px 20px 0px 0px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 100px',
    backgroundSize: '85%',
    // [theme.breakpoints.down('xs')]: {
    //   height: 160,
    //   backgroundPosition: 'center 80px',
    // },
    // [theme.breakpoints.only('lg')]: {
    //   height: 200,
    //   backgroundPosition: 'center 100px',
    // },
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
    // [theme.breakpoints.down('xs')]: {
    //   paddingTop: 25,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   paddingTop: 30,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   paddingTop: 40,
    // },
  },
  itemContentText: {
    // [theme.breakpoints.down('xs')]: {
    //   margin: '0px 25px 10px 25px',
    // },
    // [theme.breakpoints.only('sm')]: {
    //   margin: '0px 30px 10px 30px',
    // },
    // [theme.breakpoints.only('md')]: {
    //   margin: '0px 35px 10px 35px',
    // },
    // [theme.breakpoints.only('lg')]: {
    //   margin: '0px 40px 10px 40px',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   margin: '0px 45px 10px 45px',
    // },
  },
  itemContentFirst: {
    // [theme.breakpoints.down('xs')]: {
    //   marginTop: 25,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   marginTop: 30,
    // },
    // [theme.breakpoints.only('md')]: {
    //   marginTop: 35,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   marginTop: 40,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   marginTop: 45,
    // },
  },
  itemContentLast: {
    // [theme.breakpoints.down('xs')]: {
    //   marginBottom: 25,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   marginBottom: 30,
    // },
    // [theme.breakpoints.only('md')]: {
    //   marginBottom: 35,
    // },
    // [theme.breakpoints.only('lg')]: {
    //   marginBottom: 40,
    // },
    // [theme.breakpoints.up('xl')]: {
    //   marginBottom: 45,
    // },
  },
}

export default styles