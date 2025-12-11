import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import OnboardingIcon from '@/components/Icons/OnboardingIcon';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../styles';
import type { IOnboardingStepOneProps } from './interfaces/IOnboardingStepOneProps';

export default function OnboardingStepOne({ handleGoToNextStep }: IOnboardingStepOneProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <>
      <View style={styles.emptySpace}></View>
      <View style={styles.centerBlock}>
        <OnboardingIcon />
        <AppText style={styles.title}>{t('onboarding.welcome')}</AppText>
        <AppText style={styles.subtitle}>{t('onboarding.subtitle')}</AppText>
      </View>
      <Pressable
        style={[styles.continueButton]}
        onPress={handleGoToNextStep}
      >
        <AppText style={[styles.continueButtonText]}>{t('onboarding.continue')}</AppText>
      </Pressable>
    </>
  );
}
