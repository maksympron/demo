import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';

const KeyboardAvoidingScrollView: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default KeyboardAvoidingScrollView;
