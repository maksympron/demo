import React, { useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';

export default function SubStepTenPregnancy({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });

  const pregnancyOptions = [
    { id: '1', label: 'Pregnant' },
    { id: '2', label: 'Postpartum' },
    { id: '3', label: 'Neither' },
  ];

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const renderPregnancyOption = ({ item }: { item: (typeof pregnancyOptions)[0] }) => {
    const isSelected = item.id === selectedOptionId;

    return (
      <Pressable
        style={{
          alignSelf: 'stretch',
          borderWidth: 1,
          borderColor: isSelected ? '#de6e53' : 'gray',
          backgroundColor: isSelected ? '#fff3f0' : 'white',
          paddingVertical: 16,
          paddingHorizontal: 20,
          marginBottom: 10,
          alignItems: 'center',
        }}
        onPress={() => setSelectedOptionId(item.id)}
      >
        <AppText
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: isSelected ? '#de6e53' : 'black',
          }}
        >
          {item.label}
        </AppText>
      </Pressable>
    );
  };

  return (
    <>
      <View style={[onboardingScreenStyles.centerBlock, { alignItems: 'stretch' }]}>
        <AppText style={onboardingScreenStyles.title}>
          Are you currently pregnant or in the postpartum period?
        </AppText>
        <FlatList
          data={pregnancyOptions}
          renderItem={renderPregnancyOption}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ marginTop: 20 }}
        />
      </View>

      <Pressable
        style={[onboardingScreenStyles.continueButton, { opacity: selectedOptionId ? 1 : 0.5 }]}
        onPress={handleGoToNextSubStep}
        disabled={!selectedOptionId}
      >
        <AppText style={onboardingScreenStyles.continueButtonText}>Continue</AppText>
      </Pressable>
    </>
  );
}
