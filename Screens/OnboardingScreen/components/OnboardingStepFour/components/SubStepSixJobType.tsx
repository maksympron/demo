import React, { useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';

export default function SubStepSixJobType({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });

  const jobTypes = [
    { id: '1', main: 'Desk job / sedentary', secondary: 'mostly sitting' },
    { id: '2', main: 'Active job', secondary: 'on your feet or moving most of the day' },
    { id: '3', main: 'Mixed', secondary: 'a combination of desk and physical work' },
    { id: '4', main: 'Shift work', secondary: 'irregular hours' },
    { id: '5', main: 'Manual Labor', secondary: 'heavy physical work' },
    { id: '6', main: 'Other', secondary: '' },
  ];

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const renderJobType = ({ item }: { item: (typeof jobTypes)[0] }) => {
    const isSelected = item.id === selectedJobId;

    return (
      <Pressable
        style={{
          alignSelf: 'stretch', // ensures full width
          borderWidth: 1,
          borderColor: isSelected ? '#de6e53' : 'gray',
          backgroundColor: isSelected ? '#fff3f0' : 'white',
          paddingVertical: 16,
          paddingHorizontal: 20,
          marginBottom: 10,
          gap: 4,
        }}
        onPress={() => setSelectedJobId(item.id)}
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
        {item.secondary ? (
          <AppText
            style={{
              fontSize: 12,
              color: isSelected ? '#de6e53' : 'gray',
              textAlign: 'center',
            }}
          >
            {item.secondary}
          </AppText>
        ) : null}
      </Pressable>
    );
  };

  return (
    <>
      <View style={[onboardingScreenStyles.centerBlock, { alignItems: 'stretch' }]}>
        <AppText style={onboardingScreenStyles.title}>What kind of job do you have?</AppText>
        <FlatList
          data={jobTypes}
          renderItem={renderJobType}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ marginTop: 20 }}
        />
      </View>
      <Pressable
        style={[
          onboardingScreenStyles.continueButton,
          { opacity: selectedJobId ? 1 : 0.5 }, // optional: disable if none selected
        ]}
        onPress={handleGoToNextSubStep}
        disabled={!selectedJobId}
      >
        <AppText style={onboardingScreenStyles.continueButtonText}>Continue</AppText>
      </Pressable>
    </>
  );
}
