import { Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import OnboardingStepFour from '@/Screens/OnboardingScreen/components/OnboardingStepFour';
import OnboardingStepOne from '@/Screens/OnboardingScreen/components/OnboardingStepOne';
import OnboardingStepThree from '@/Screens/OnboardingScreen/components/OnboardingStepThree';
import OnboardingStepTwo from '@/Screens/OnboardingScreen/components/OnboardingStepTwo';
import type { IOnboardingScreenProps } from '@/Screens/OnboardingScreen/interfaces/IOnboardingScreenProps';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from './styles';

export default function OnboardingScreen({
  handleGoToNextStep,
  currentStep,
}: IOnboardingScreenProps) {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <OnboardingStepOne />;
      case 2:
        return <OnboardingStepTwo />;
      case 3:
        return <OnboardingStepThree />;
      case 4:
        return <OnboardingStepFour />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/*<OnboardingStepIndicator currentStep={currentStep} totalSteps={totalSteps} />*/}
      <View style={{ height: 62 }}></View>
      <View style={styles.centerBlock}>{renderStep()}</View>

      <Pressable
        style={[styles.continueButton]}
        onPress={handleGoToNextStep}
      >
        <AppText style={[styles.continueButtonText]}>Continue</AppText>
      </Pressable>
    </View>
  );
}
