import { extendTheme } from 'native-base';

export const DefaultTheme = extendTheme({
  colors: {
    primary: {
      '50': '#5dbeff',
      '100': '#35aeff',
      '200': '#0d9eff',
      '300': '#0189e3',
      '400': '#0171bb',
      '500': '#06629f',
      '600': '#095384',
      '700': '#0b456b',
      '800': '#0c3653',
      '900': '#0b283c',
    },
    TextGray: {
      '50': '#f5f1f1',
      '100': '#e3dbdb',
      '200': '#cec8c8',
      '300': '#b7b7b7',
      '400': '#a3a3a3',
      '500': '#919e9e',
      '600': '#7e9a9a',
      '700': '#699797',
      '800': '#589090',
      '900': '#498888',
    },
  },
  components: {
    Input: {
      baseStyle: {
        backgroundColor: 'white',
        _focus: {
          borderColor: '#0171BB',
        },
      },
    },
    Text: {
      baseStyle: {
        color: '#27272a',
      },
    },
  },
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
});

type CustomTheme = typeof DefaultTheme;
declare module 'native-base' {
  interface ICustomTheme extends CustomTheme {}
}

export default DefaultTheme;
