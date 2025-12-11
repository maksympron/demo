import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';
import getSubStepStyles from './styles';

export default function SubStepTenPregnancy({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });
  const subStepStyles = getSubStepStyles({ theme });

  const pregnancyOptions = [
    { id: '1', label: t('onboarding.pregnancyOptions.pregnant') },
    { id: '2', label: t('onboarding.pregnancyOptions.postpartum') },
    { id: '3', label: t('onboarding.pregnancyOptions.neither') },
  ];

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const renderPregnancyOption = ({ item }: { item: (typeof pregnancyOptions)[0] }) => {
    const isSelected = item.id === selectedOptionId;

    return (
      <Pressable
        style={[subStepStyles.listItem, isSelected && subStepStyles.selectedListItem]}
        onPress={() => setSelectedOptionId(item.id)}
      >
        <AppText
          style={[subStepStyles.listItemText, isSelected && subStepStyles.selectedListItemText]}
        >
          {item.label}
        </AppText>
      </Pressable>
    );
  };

  return (
    <>
      <View style={[onboardingScreenStyles.centerBlock, onboardingScreenStyles.stretch]}>
        <AppText style={onboardingScreenStyles.title}>{t('onboarding.pregnancyTitle')}</AppText>
        <FlatList
          data={pregnancyOptions}
          renderItem={renderPregnancyOption}
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
