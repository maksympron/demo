import React, { useState } from 'react';
import { Pressable, TextInput, TouchableOpacity, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { SegmentedSelector } from '@/components/SegmentedSelector';
import { useAppSelector } from '@/store/hooks/useApp'; // Import useAppSelector
import selectCurrentTheme from '@/store/slices/theme/selectors'; // Import selectCurrentTheme
import getStyles from '../../../styles'; // Corrected import to getStyles
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';

export default function SubStepFourWeight({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const theme = useAppSelector(selectCurrentTheme); // Get theme
  const onboardingScreenStyles = getStyles({ theme }); // Call getStyles with theme
  const [activeTab, setActiveTab] = useState<'kg' | 'lb'>('kg'); // State for selected unit
  return (
    <>
      <View style={onboardingScreenStyles.centerBlock}>
        <AppText style={onboardingScreenStyles.title}>How much do you weigh?</AppText>
        <View style={{ alignItems: 'center', gap: 20, width: '100%' }}>
          <SegmentedSelector
            variant="switch"
            options={[
              { id: 'kg', label: 'kg' },
              { id: 'lb', label: 'lb' },
            ]}
            value={activeTab}
            onChange={(val) => setActiveTab(val as 'kg' | 'lb')}
            containerStyle={{ width: 130 }}
          />
          <TextInput
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
        <AppText style={[onboardingScreenStyles.continueButtonText]}>Continue</AppText>
      </Pressable>
    </>
  );
}
