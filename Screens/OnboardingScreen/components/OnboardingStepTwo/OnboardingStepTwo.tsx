import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../styles';
import type { IOnboardingStepTwoProps } from './interfaces/IOnboardingStepTwoProps';

export default function OnboardingStepTwo({ handleGoToNextStep }: IOnboardingStepTwoProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <>
      <View style={{ height: 62 }}></View>
      <View style={styles.centerBlock}>
        <AppText style={styles.title}>{t('onboarding.privacyTitle')}</AppText>
        <AppText style={styles.subtitle}>{t('onboarding.privacySubtitle')}</AppText>
      </View>
      <Pressable
        style={[styles.continueButton]}
        onPress={handleGoToNextStep}
      >
        <AppText style={[styles.continueButtonText]}>Continue</AppText>
      </Pressable>
    </>
  );
}
