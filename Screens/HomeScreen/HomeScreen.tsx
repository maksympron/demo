import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { testIdHomePage } from '@/constants/TestId';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from './styles';

export default function HomeScreen() {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <View
      style={styles.container}
      testID={testIdHomePage}
    >
      <AppText>{`${t('home.pageTitle')}`}</AppText>
    </View>
  );
}
