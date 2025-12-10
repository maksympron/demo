import { useEffect, useState } from 'react';
import { Appearance, View, Pressable } from 'react-native';
import AppSwitch from '@/components/AppSwitch/AppSwitch';
import AppText from '@/components/AppText/AppText';
import getStyles from './styles';

import setColorScheme = Appearance.setColorScheme;

import { useTranslation } from 'react-i18next';

import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import { testIdSettingPage, testIdLogoutButton } from '@/constants/TestId';
import Theme from '@/constants/Theme';
import { useAppDispatch, useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import { toggleTheme } from '@/store/slices/theme/slice';
import { useSession } from '@/context/SessionProvider';

export default function SettingsScreen() {
  const theme = useAppSelector(selectCurrentTheme);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { signOut } = useSession();
  const [isEnabled, setIsEnabled] = useState(false);
  const styles = getStyles({ theme });

  useEffect(() => {
    setColorScheme?.(isEnabled ? Theme.dark : Theme.light);
  }, [isEnabled]);

  return (
    <View
      style={styles.container}
      testID={testIdSettingPage}
    >
      <View style={styles.switchContainer}>
        <AppSwitch
          toggleSwitch={(prop) => {
            setIsEnabled(prop);
            dispatch(toggleTheme());
          }}
          isEnabled={theme === Theme.dark}
        />
        <AppText>{t('settings.darkMode')}</AppText>
      </View>
      <LanguageSelector />

      <Pressable style={styles.logoutButton} onPress={() => signOut()} testID={testIdLogoutButton}>
        <AppText style={styles.logoutButtonText}>{t('settings.logout')}</AppText>
      </Pressable>
    </View>
  );
}
