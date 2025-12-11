import { StyleSheet } from 'react-native';
import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';
import Colors from '@/constants/Colors';

const getStyles = ({ theme }: { theme?: ColorSchemeName }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    wrapper: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',

      flex: 1,
    },
    centerBlock: {
      alignItems: 'center',
      gap: 32,
      width: '100%',
    },
    title: {
      fontFamily: 'AlbertSemiBold',
      fontSize: 32,
      textAlign: 'center',
      width: '100%',
    },
    subtitle: {
      fontFamily: 'AlbertRegular',
      color: Colors[theme ?? 'light'].lightGrey,
      textAlign: 'center',
      marginHorizontal: 20,
    },
    continueButton: {
      height: 62,
      justifyContent: 'center',
      backgroundColor: Colors[theme ?? 'light'].orange,
      padding: 12,
      borderRadius: 100,
      alignItems: 'center',
      width: '100%',
    },
    continueButtonText: {
      color: Colors[theme ?? 'light'].white,
      fontFamily: 'AlbertMedium',
      fontSize: 20,
      fontWeight: 'bold',
    },
    emptySpace: {
      height: 62,
    },
    stretch: {
      alignItems: 'stretch',
    },
  });

export default getStyles;
