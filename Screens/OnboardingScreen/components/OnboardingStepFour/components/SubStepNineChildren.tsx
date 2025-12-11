import { useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';

export default function SubStepNineChildren({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });

  const childrenOptions = [
    { id: '0', label: '0' },
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3+' },
  ];

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const renderChildOption = ({ item }: { item: (typeof childrenOptions)[0] }) => {
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
        <AppText style={onboardingScreenStyles.title}>Do you have children?</AppText>
        <FlatList
          data={childrenOptions}
          renderItem={renderChildOption}
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
