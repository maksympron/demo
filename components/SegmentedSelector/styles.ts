import { StyleSheet } from 'react-native';
import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

export const getSegmentedSelectorStyle = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#F5F5F5', // light background
      borderRadius: 100,
      padding: 2,
      overflow: 'hidden',
      position: 'relative',
      flex: 1,
    },
    button: {
      flex: 1,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    option: {
      flex: 1,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    slider: {
      position: 'absolute',
      top: 2,
      bottom: 2,
      left: 2,
      borderRadius: 100,
      backgroundColor: '#4CAF50', // green
    },
    selector: {
      position: 'absolute',
      top: 2,
      bottom: 2,
      left: 2,
      borderRadius: 100,
      backgroundColor: '#4CAF50', // green
    },
    text: {
      fontSize: 14,
      fontFamily: 'RedHatDisplaySemiBold',
      color: '#000000', // mainBlack
    },
    label: {
      fontSize: 14,
      fontFamily: 'RedHatDisplaySemiBold',
      color: '#000000', // mainBlack
    },
    activeText: {
      color: '#FFFFFF', // white
    },
    labelSelected: {
      color: '#FFFFFF', // white
    },
    iconContainer: {
      marginBottom: 2,
    },
  });

export const getCompactSegmentedSelectorStyle = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#F5F5F5',
      borderRadius: 100,
      padding: 2,
      overflow: 'hidden',
      position: 'relative',
      maxWidth: 478,
      marginHorizontal: 32,
      flex: 1,
    },
    button: {
      flex: 1,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    option: {
      flex: 1,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    slider: {
      position: 'absolute',
      top: 2,
      bottom: 2,
      left: 2,
      borderRadius: 100,
      backgroundColor: '#4CAF50',
    },
    selector: {
      position: 'absolute',
      top: 2,
      bottom: 2,
      left: 2,
      borderRadius: 100,
      backgroundColor: '#4CAF50',
    },
    text: {
      fontSize: 14,
      fontFamily: 'RedHatDisplaySemiBold',
      color: '#000000',
    },
    label: {
      fontSize: 14,
      fontFamily: 'RedHatDisplaySemiBold',
      color: '#000000',
    },
    activeText: {
      color: '#FFFFFF',
    },
    labelSelected: {
      color: '#FFFFFF',
    },
    iconContainer: {
      marginBottom: 2,
    },
  });

export const getSwitchSelectorStyle = () =>
  StyleSheet.create({
    container: {
      height: 48,
      backgroundColor: '#eee',
      borderRadius: 24,
      flexDirection: 'row',
      padding: 4,
      position: 'relative',
      overflow: 'hidden',
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 12,
      zIndex: 1,
      gap: 8,
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 12,
      zIndex: 1,
      gap: 8,
    },
    slider: {
      position: 'absolute',
      top: 4,
      bottom: 4,
      backgroundColor: 'black',
      borderRadius: 20,
    },
    selector: {
      position: 'absolute',
      top: 4,
      bottom: 4,
      backgroundColor: 'black',
      borderRadius: 20,
    },
    text: {
      fontSize: 16,
      fontFamily: 'RedHatDisplaySemiBold',
      color: '#000000',
    },
    label: {
      fontSize: 16,
      fontFamily: 'RedHatDisplaySemiBold',
      color: '#000000',
    },
    activeText: {
      color: '#FFFFFF',
    },
    labelSelected: {
      color: '#FFFFFF',
    },
    iconContainer: {
      marginBottom: 2,
    },
  });
