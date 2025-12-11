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

export default function SubStepFourWeight({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });
  const subStepStyles = getSubStepStyles({ theme });
  const [activeTab, setActiveTab] = useState<'kg' | 'lb'>('kg'); // State for selected unit
  return (
    <Pressable
      style={subStepStyles.container}
      onPress={Keyboard.dismiss}
    >
      <View style={subStepStyles.content}>
        <View style={subStepStyles.emptySpace}></View>
        <View style={onboardingScreenStyles.centerBlock}>
          <AppText style={[onboardingScreenStyles.title, { maxWidth: 320 }]}>
            {t('onboarding.weightTitle')}
          </AppText>
          <View style={subStepStyles.inputContainer}>
            <SegmentedSelector
              variant="switch"
              options={[
                { id: 'kg', label: t('onboarding.kg') },
                { id: 'lb', label: t('onboarding.lb') },
              ]}
              value={activeTab}
              onChange={(val) => setActiveTab(val as 'kg' | 'lb')}
              containerStyle={subStepStyles.segmentedSelectorContainer}
            />
            <TextInput
              keyboardType="numeric"
              style={subStepStyles.input}
            />
          </View>
        </View>
        <Pressable
          style={[onboardingScreenStyles.continueButton]}
          onPress={handleGoToNextSubStep}
        >
          <AppText style={[onboardingScreenStyles.continueButtonText]}>
            {t('onboarding.continue')}
          </AppText>
        </Pressable>
      </View>
    </Pressable>
  );
}
