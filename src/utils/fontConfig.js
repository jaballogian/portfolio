// MATERIAL UI CORES
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

let fontTheme = createTheme({
  typography: {
    fontFamily: [
      'Cera Pro Medium', 'sans-serif'
    ].join(','),
  },
})

fontTheme = responsiveFontSizes(fontTheme) 

export default fontTheme