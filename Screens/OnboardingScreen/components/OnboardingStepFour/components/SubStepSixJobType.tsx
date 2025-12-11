import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';
import getSubStepStyles from './styles';

export default function SubStepSixJobType({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });
  const subStepStyles = getSubStepStyles({ theme });

  const jobTypes = [
    {
      id: '1',
      main: t('onboarding.jobTypes.desk'),
      secondary: t('onboarding.jobTypes.deskSecondary'),
    },
    {
      id: '2',
      main: t('onboarding.jobTypes.active'),
      secondary: t('onboarding.jobTypes.activeSecondary'),
    },
    {
      id: '3',
      main: t('onboarding.jobTypes.mixed'),
      secondary: t('onboarding.jobTypes.mixedSecondary'),
    },
    {
      id: '4',
      main: t('onboarding.jobTypes.shift'),
      secondary: t('onboarding.jobTypes.shiftSecondary'),
    },
    {
      id: '5',
      main: t('onboarding.jobTypes.manual'),
      secondary: t('onboarding.jobTypes.manualSecondary'),
    },
    { id: '6', main: t('onboarding.jobTypes.other'), secondary: '' },
  ];

  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const renderJobType = ({ item }: { item: (typeof jobTypes)[0] }) => {
    const isSelected = item.id === selectedJobId;

    return (
      <Pressable
        style={[subStepStyles.listItem, isSelected && subStepStyles.selectedListItem]}
        onPress={() => setSelectedJobId(item.id)}
      >
        <AppText
          style={[subStepStyles.listItemText, isSelected && subStepStyles.selectedListItemText]}
        >
          {item.main}
        </AppText>
        {item.secondary ? (
          <AppText
            style={[
              subStepStyles.listItemSecondaryText,
              isSelected && subStepStyles.selectedListItemSecondaryText,
            ]}
          >
            {item.secondary}
          </AppText>
        ) : null}
      </Pressable>
    );
  };

  return (
    <>
      <View style={[onboardingScreenStyles.centerBlock, onboardingScreenStyles.stretch]}>
        <AppText style={onboardingScreenStyles.title}>{t('onboarding.jobTypeTitle')}</AppText>
        <FlatList
          data={jobTypes}
          renderItem={renderJobType}
          keyExtractor={(item) => item.id}
          contentContainerStyle={subStepStyles.listContentContainer}
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
        <AppText style={onboardingScreenStyles.continueButtonText}>
          {t('onboarding.continue')}
        </AppText>
      </Pressable>
    </>
  );
}
