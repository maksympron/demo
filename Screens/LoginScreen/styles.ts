import { StyleSheet } from 'react-native';
import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';
import Colors from '@/constants/Colors';

const getStyles = ({ theme }: { theme?: ColorSchemeName }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    content: {
      flex: 1,
      padding: 16,
      backgroundColor: Colors[theme ?? 'light'].background,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    main: {
      width: '100%',
    },
    header: {
      flexDirection: 'column',
      gap: 24,
      marginBottom: 32,
    },
    title: {
      fontSize: 28,
      fontFamily: 'AlbertRegular',
      color: Colors[theme ?? 'light'].text,
    },
    subtitle: {
      fontSize: 16,
      fontFamily: 'AlbertRegular',
      color: Colors[theme ?? 'light'].text,
    },
    form: {
      width: '100%',
      gap: 20,
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      marginBottom: 16,
    },
    forgotPasswordText: {
      color: Colors[theme ?? 'light'].tint,
    },
    loginButton: {
      height: 62,
      justifyContent: 'center',
      backgroundColor: '#e8dad5',
      padding: 12,
      borderRadius: 100,
      alignItems: 'center',
      width: '100%',
    },
    loginButtonActive: {
      backgroundColor: '#de6e53',
    },
    loginButtonText: {
      color: '#fff',
      fontFamily: 'AlbertMedium',
      fontSize: 20,
      fontWeight: 'bold',
    },
    footer: {
      gap: 32,
      alignItems: 'center',
      width: '100%',
    },
    signup: {
      flexDirection: 'row',
    },
    signupText: {
      fontFamily: 'AlbertRegular',
      fontSize: 16,
    },
    signupButton: {
      color: '#fa9d65',
      textDecorationLine: 'underline',
      fontFamily: 'AlbertRegular',
      fontSize: 16,
    },
    actionGroup: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 16,
    },
    accountText: {
      color: Colors[theme ?? 'light'].text,
    },
    accountActionText: {
      color: Colors[theme ?? 'light'].tint,
      marginLeft: 4,
    },
  });

export default getStyles;
