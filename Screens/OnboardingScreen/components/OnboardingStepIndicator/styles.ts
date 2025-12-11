import { StyleSheet } from 'react-native';
import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';
import Colors from '@/constants/Colors';

const getStyles = ({ theme }: { theme?: ColorSchemeName }) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8,
      height: 6,
    },
    stepDot: {
      flex: 1, // 👈 each dot takes equal width
      height: 6,
      borderRadius: 4,
      backgroundColor: Colors[theme ?? 'light'].text + '30',
    },
    stepDotActive: {
      backgroundColor: '#fa9d65',
    },
  });

export default getStyles;
