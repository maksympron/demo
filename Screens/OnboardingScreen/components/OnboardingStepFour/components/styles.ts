import { StyleSheet } from 'react-native';
import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';
import Colors from '@/constants/Colors';

const getSubStepStyles = ({ theme }: { theme?: ColorSchemeName }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    emptySpace: {
      height: 52,
    },
    input: {
      width: '100%',
      borderBottomWidth: 2,
      fontSize: 24,
      paddingVertical: 12,
      textAlign: 'center',
      fontFamily: 'AlbertRegular',
      borderBottomColor: Colors[theme ?? 'light'].black,
    },
    inputContainer: {
      alignItems: 'center',
      gap: 20,
      width: '100%',
    },
    segmentedSelectorContainer: {
      width: 130,
    },
    countryPickerButton: {
      borderWidth: 1,
      backgroundColor: Colors[theme ?? 'light'].background,
      padding: 10,
      borderRadius: 12,
      marginTop: 20,
      width: '100%',
    },
    listItem: {
      alignSelf: 'stretch',
      borderWidth: 1,
      borderColor: Colors[theme ?? 'light'].lightGrey,
      backgroundColor: Colors[theme ?? 'light'].background,
      paddingVertical: 16,
      paddingHorizontal: 20,
      marginBottom: 10,
      gap: 4,
    },
    selectedListItem: {
      borderColor: Colors[theme ?? 'light'].orange,
      backgroundColor: Colors[theme ?? 'light'].orangeLight,
    },
    listItemText: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: Colors[theme ?? 'light'].text,
    },
    selectedListItemText: {
      color: Colors[theme ?? 'light'].orange,
    },
    listItemSecondaryText: {
      fontSize: 12,
      color: Colors[theme ?? 'light'].lightGrey,
      textAlign: 'center',
    },
    selectedListItemSecondaryText: {
      color: Colors[theme ?? 'light'].orange,
    },
    listContentContainer: {
      marginTop: 20,
    },
  });

export default getSubStepStyles;
