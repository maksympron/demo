import React from 'react';
import { Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp'; // Import useAppSelector
import selectCurrentTheme from '@/store/slices/theme/selectors'; // Import selectCurrentTheme
import getStyles from '../../../styles'; // Corrected import to getStyles
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';

export default function SubStepOneAboutYou({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const theme = useAppSelector(selectCurrentTheme); // Get theme
  const onboardingScreenStyles = getStyles({ theme }); // Call getStyles with theme

  return (
    <>
      <View style={onboardingScreenStyles.centerBlock}>
        <AppText style={onboardingScreenStyles.title}>About You</AppText>
      </View>
      <Pressable
        style={[onboardingScreenStyles.continueButton]}
        onPress={handleGoToNextSubStep}
      >
        <AppText style={[onboardingScreenStyles.continueButtonText]}>Continue</AppText>
      </Pressable>
    </>
  );
}
