import { extendTheme } from 'native-base'

export const DefaultTheme = extendTheme({
  fontConfig: {
    Montserrat: {
      400: {
        normal: 'Montserrat-Regular',
      },
      500: {
        normal: 'Montserrat-Medium',
      },
      600: {
        normal: 'Montserrat-SemiBold',
      },
      700: {
        normal: 'Montserrat-Bold',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    mono: 'Montserrat',
  },
})

export default DefaultTheme
