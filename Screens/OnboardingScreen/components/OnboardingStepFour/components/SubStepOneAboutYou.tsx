import React from 'react';
import { Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp'; // Import useAppSelector
import selectCurrentTheme from '@/store/slices/theme/selectors'; // Import selectCurrentTheme
import getStyles from '../../../styles'; // Corrected import to getStyles
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';

import { useTranslation } from 'react-i18next';

export default function SubStepOneAboutYou({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme); // Get theme
  const onboardingScreenStyles = getStyles({ theme }); // Call getStyles with theme

  return (
    <>
      <View style={onboardingScreenStyles.centerBlock}>
        <AppText style={onboardingScreenStyles.title}>{t('onboarding.aboutYouTitle')}</AppText>
      </View>
      <Pressable
        style={[onboardingScreenStyles.continueButton]}
        onPress={handleGoToNextSubStep}
      >
        <AppText style={[onboardingScreenStyles.continueButtonText]}>
          {t('onboarding.continue')}
        </AppText>
      </Pressable>
    </>
  );
}
