import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';

const getStyles = ({ theme }: { theme?: ColorSchemeName }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[theme ?? 'light'].background,
      padding: 12,
      gap: 24,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      backgroundColor: Colors[theme ?? 'light'].background,
    },
    logoutButton: {
      backgroundColor: Colors[theme ?? 'light'].tint,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
    },
    logoutButtonText: {
      color: Colors[theme ?? 'light'].background,
      fontWeight: 'bold',
    },
  });

export default getStyles;
