import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';
import getSubStepStyles from './styles';

export default function SubStepNineChildren({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });
  const subStepStyles = getSubStepStyles({ theme });

  const childrenOptions = [
    { id: '0', label: t('onboarding.childrenOptions.0') },
    { id: '1', label: t('onboarding.childrenOptions.1') },
    { id: '2', label: t('onboarding.childrenOptions.2') },
    { id: '3', label: t('onboarding.childrenOptions.3+') },
  ];

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const renderChildOption = ({ item }: { item: (typeof childrenOptions)[0] }) => {
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
        <AppText style={onboardingScreenStyles.title}>{t('onboarding.childrenTitle')}</AppText>
        <FlatList
          data={childrenOptions}
          renderItem={renderChildOption}
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
