import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../styles';

export default function OnboardingStepTwo() {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <View style={styles.centerBlock}>
      <AppText style={styles.title}>{t('onboarding.privacyTitle')}</AppText>
      <AppText style={styles.subtitle}>{t('onboarding.privacySubtitle')}</AppText>
    </View>
  );
}