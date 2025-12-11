import { StyleSheet } from 'react-native';

const getStyles = ({ theme }: { theme: any }) =>
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
      color: '#454545',
      textAlign: 'center',
      marginHorizontal: 20,
    },
    continueButton: {
      height: 62,
      justifyContent: 'center',
      backgroundColor: '#de6e53',
      padding: 12,
      borderRadius: 100,
      alignItems: 'center',
      width: '100%',
    },
    continueButtonText: {
      color: 'white',
      fontFamily: 'AlbertMedium',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default getStyles;
