import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Pressable, View } from 'react-native';

import Colors from '@/constants/Colors';
import { testIdButtonBack } from '@/constants/TestId';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

function ButtonGoBack() {
  const navigation = useNavigation();
  const theme = useAppSelector(selectCurrentTheme);

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      testID={testIdButtonBack}
    >
      <View style={{ paddingHorizontal: 12 }}>
        <Ionicons
          name="chevron-back"
          size={24}
          color={Colors[theme].text}
        />
      </View>
    </Pressable>
  );
}

export default ButtonGoBack;
