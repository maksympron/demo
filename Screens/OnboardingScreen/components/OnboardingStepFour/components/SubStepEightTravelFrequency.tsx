import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';
import getSubStepStyles from './styles';

export default function SubStepEightTravelFrequency({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });
  const subStepStyles = getSubStepStyles({ theme });

  const travelOptions = [
    {
      id: '1',
      main: t('onboarding.travelFrequency.rarely'),
      secondary: t('onboarding.travelFrequency.rarelySecondary'),
    },
    {
      id: '2',
      main: t('onboarding.travelFrequency.occasionally'),
      secondary: t('onboarding.travelFrequency.occasionallySecondary'),
    },
    {
      id: '3',
      main: t('onboarding.travelFrequency.frequently'),
      secondary: t('onboarding.travelFrequency.frequentlySecondary'),
    },
    {
      id: '4',
      main: t('onboarding.travelFrequency.constantly'),
      secondary: t('onboarding.travelFrequency.constantlySecondary'),
    },
  ];

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const renderTravelOption = ({ item }: { item: (typeof travelOptions)[0] }) => {
    const isSelected = item.id === selectedOptionId;

    return (
      <Pressable
        style={[subStepStyles.listItem, isSelected && subStepStyles.selectedListItem]}
        onPress={() => setSelectedOptionId(item.id)}
      >
        <AppText
          style={[subStepStyles.listItemText, isSelected && subStepStyles.selectedListItemText]}
        >
          {item.main}
        </AppText>
        <AppText
          style={[
            subStepStyles.listItemSecondaryText,
            isSelected && subStepStyles.selectedListItemSecondaryText,
          ]}
        >
          {item.secondary}
        </AppText>
      </Pressable>
    );
  };

  return (
    <>
      <View style={[onboardingScreenStyles.centerBlock, onboardingScreenStyles.stretch]}>
        <AppText style={onboardingScreenStyles.title}>
          {t('onboarding.travelFrequencyTitle')}
        </AppText>
        <FlatList
          data={travelOptions}
          renderItem={renderTravelOption}
          keyExtractor={(item) => item.id}
          contentContainerStyle={subStepStyles.listContentContainer}
        />
      </View>

      <Pressable
        style={[onboardingScreenStyles.continueButton, { opacity: selectedOptionId ? 1 : 0.5 }]}
        onPress={handleGoToNextSubStep}
        disabled={!selectedOptionId}
      >
        <AppText style={onboardingScreenStyles.continueButtonText}>
          {t('onboarding.continue')}
        </AppText>
      </Pressable>
    </>
  );
}
