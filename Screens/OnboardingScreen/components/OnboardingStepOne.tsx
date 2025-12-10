import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppText from '@/components/AppText/AppText';
import OnboardingIcon from '@/components/Icons/OnboardingIcon';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../styles';

export default function OnboardingStepOne() {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <View style={styles.centerBlock}>
      <OnboardingIcon />
      <AppText style={styles.title}>{t('onboarding.welcome')}</AppText>
      <AppText style={styles.subtitle}>{t('onboarding.subtitle')}</AppText>
    </View>
  );
}