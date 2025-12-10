import { StyleSheet } from 'react-native';
import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';
import Colors from '@/constants/Colors';

const getStyles = ({ theme }: { theme?: ColorSchemeName }) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8,
      height: 8,
    },
    stepDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: Colors[theme ?? 'light'].text + '30', // Light grey
    },
    stepDotActive: {
      backgroundColor: '#fa9d65', // Orange
    },
  });

export default getStyles;