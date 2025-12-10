import { StyleSheet } from 'react-native';
import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

const getStyles = ({ theme }: { theme?: ColorSchemeName }) =>
  StyleSheet.create({
    inputContainer: {
      gap: 12,
    },
    inputWrapper: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      fontSize: 12,
      fontFamily: 'AlbertRegular',
      color: theme === 'dark' ? '#FFFFFF' : '#000000',
    },
    outlineLabel: {
      color: '#000000',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      paddingVertical: 8,
      paddingRight: 20,
      color: theme === 'dark' ? '#FFFFFF' : '#000000',
      fontFamily: 'AlbertRegular',
      fontSize: 16,
      flex: 1,
      borderBottomWidth: 1,
      borderColor: 'black',
    },
    outlineInput: {
      borderBottomWidth: 1,
      borderColor: '#D3D3D3', // light grey
      color: '#000000',
      backgroundColor: 'transparent',
    },
    inputError: {
      borderBottomWidth: 1,
      borderColor: '#FF3B30', // iOS red
    },
    inputSuccess: {
      borderBottomWidth: 1,
    },
    inputFocused: {
      borderBottomWidth: 1,
    },
    passwordInput: {
      paddingRight: 50,
    },
    eyeButton: {
      position: 'absolute',
      right: 16,
      height: 56,
      justifyContent: 'center',
    },
    descriptionText: {
      fontSize: 12,
      color: '#7A7A7A', // dark300 equivalent
      fontFamily: 'RedHatDisplayMedium',
    },
    error: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    errorText: {
      color: '#FF3B30', // error red
      fontFamily: 'RedHatDisplayMedium',
    },
  });

export default getStyles;
