const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    // [theme.breakpoints.down('xs')]: {
    //   // height: '125vh',
    //   minHeight: 1200,
    // },
    // [theme.breakpoints.only('sm')]: {
    //   // height: '125vh',
    //   minHeight: 1200,
    // },
    // [theme.breakpoints.only('md')]: {
    //   // height: '150vh',
    //   minHeight: 1200,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   height: '100vh',
    //   minHeight: 800,
    // },
  },
  rootAnimation: {
    animation: '$fadeIn 0.5s ease-in-out',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1
    },
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0px)',
    bottom: 25,
    zIndex: 1,
  },
}

export default styles