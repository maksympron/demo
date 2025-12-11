import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { SegmentedSelector } from '@/components/SegmentedSelector';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';

export default function SubStepThreeHeight({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });

  const [activeTab, setActiveTab] = useState<'cm' | 'ft'>('cm'); // State for selected unit

  return (
    <>
      <View style={onboardingScreenStyles.centerBlock}>
        <AppText style={onboardingScreenStyles.title}>What is your height?</AppText>

        <View style={{ alignItems: 'center', gap: 20, width: '100%' }}>
          <SegmentedSelector
            variant="switch"
            options={[
              { id: 'cm', label: 'cm' },
              { id: 'ft', label: 'ft' },
            ]}
            value={activeTab}
            onChange={(val) => setActiveTab(val as 'cm' | 'ft')}
            containerStyle={{ width: 130 }}
          />
          <TextInput
            placeholder={activeTab === 'cm' ? 'e.g., 170' : `e.g., 5'7"`}
            keyboardType="numeric"
            style={{
              width: '100%',
              borderBottomWidth: 2,
              paddingVertical: 12,
              fontSize: 24,
              textAlign: 'center',
              fontFamily: 'AlbertRegular',
            }}
          />
        </View>
      </View>

      <Pressable
        style={[onboardingScreenStyles.continueButton]}
        onPress={handleGoToNextSubStep}
      >
        <AppText style={onboardingScreenStyles.continueButtonText}>Continue</AppText>
      </Pressable>
    </>
  );
}
