import React, { useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';

export default function SubStepEightTravelFrequency({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });

  const travelOptions = [
    { id: '1', main: 'Rarely', secondary: 'A few times a year or less' },
    { id: '2', main: 'Occasionally', secondary: 'Every couple of months' },
    { id: '3', main: 'Frequently', secondary: 'At least once a month' },
    { id: '4', main: 'Constantly', secondary: 'Every week or always on the move' },
  ];

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const renderTravelOption = ({ item }: { item: (typeof travelOptions)[0] }) => {
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
          {item.main}
        </AppText>
        <AppText
          style={{
            fontSize: 12,
            color: isSelected ? '#de6e53' : 'gray',
            textAlign: 'center',
          }}
        >
          {item.secondary}
        </AppText>
      </Pressable>
    );
  };

  return (
    <>
      <View style={[onboardingScreenStyles.centerBlock, { alignItems: 'stretch' }]}>
        <AppText style={onboardingScreenStyles.title}>How often do you travel from home?</AppText>
        <FlatList
          data={travelOptions}
          renderItem={renderTravelOption}
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
