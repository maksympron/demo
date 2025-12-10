import { StyleSheet } from 'react-native';

const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      paddingVertical: 40,
    },

    centerBlock: {
      alignItems: 'center',
      gap: 32,
    },
    title: {
      fontFamily: 'AlbertRegular',
      fontSize: 28,
      textAlign: 'center',
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
