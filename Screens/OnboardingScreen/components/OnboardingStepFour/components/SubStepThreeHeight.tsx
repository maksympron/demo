import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { SegmentedSelector } from '@/components/SegmentedSelector';
import TextInput from '@/components/TextInput/TextInput';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';
import getSubStepStyles from './styles';

export default function SubStepThreeHeight({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });
  const subStepStyles = getSubStepStyles({ theme });

  const [activeTab, setActiveTab] = useState<'cm' | 'ft'>('cm'); // State for selected unit

  return (
    <Pressable
      style={subStepStyles.container}
      onPress={Keyboard.dismiss}
    >
      <View style={subStepStyles.content}>
        <View style={subStepStyles.emptySpace}></View>
        <View style={onboardingScreenStyles.centerBlock}>
          <AppText style={onboardingScreenStyles.title}>{t('onboarding.heightTitle')}</AppText>

          <View style={subStepStyles.inputContainer}>
            <SegmentedSelector
              variant="switch"
              options={[
                { id: 'cm', label: t('onboarding.cm') },
                { id: 'ft', label: t('onboarding.ft') },
              ]}
              value={activeTab}
              onChange={(val) => setActiveTab(val as 'cm' | 'ft')}
              containerStyle={subStepStyles.segmentedSelectorContainer}
            />
            <TextInput
              placeholder={
                activeTab === 'cm'
                  ? t('onboarding.heightPlaceholderCm')
                  : t('onboarding.heightPlaceholderFt')
              }
              keyboardType="numeric"
              style={subStepStyles.input}
            />
          </View>
        </View>

        <Pressable
          style={[onboardingScreenStyles.continueButton]}
          onPress={handleGoToNextSubStep}
        >
          <AppText style={onboardingScreenStyles.continueButtonText}>
            {t('onboarding.continue')}
          </AppText>
        </Pressable>
      </View>
    </Pressable>
  );
}
