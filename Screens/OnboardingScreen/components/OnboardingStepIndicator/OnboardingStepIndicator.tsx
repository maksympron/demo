import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from './styles';
import type { IOnboardingStepIndicatorProps } from './interfaces/IOnboardingStepIndicatorProps';

export default function OnboardingStepIndicator({
  currentStep,
  totalSteps,
}: IOnboardingStepIndicatorProps) {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[styles.stepDot, index + 1 <= currentStep && styles.stepDotActive]}
        />
      ))}
    </View>
  );
}