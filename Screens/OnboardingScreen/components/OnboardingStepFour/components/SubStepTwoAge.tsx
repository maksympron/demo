import { useTranslation } from 'react-i18next';
import { Keyboard, Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import TextInput from '@/components/TextInput/TextInput';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';
import getSubStepStyles from './styles';

export default function SubStepTwoAge({ handleGoToNextSubStep }: IOnboardingStepFourSubStepProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });
  const subStepStyles = getSubStepStyles({ theme });

  return (
    <Pressable
      style={subStepStyles.container}
      onPress={Keyboard.dismiss}
    >
      <View style={subStepStyles.content}>
        <View style={subStepStyles.emptySpace}></View>
        <View style={onboardingScreenStyles.centerBlock}>
          <AppText style={onboardingScreenStyles.title}>{t('onboarding.ageTitle')}</AppText>
          <TextInput
            placeholder={t('onboarding.agePlaceholder')}
            keyboardType="numeric"
            style={subStepStyles.input}
          />
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
