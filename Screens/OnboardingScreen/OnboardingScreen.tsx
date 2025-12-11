import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingStepIndicator from '@/Screens/OnboardingScreen/components/OnboardingStepIndicator/OnboardingStepIndicator';
import type { IOnboardingScreenProps } from '@/Screens/OnboardingScreen/interfaces/IOnboardingScreenProps';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import OnboardingStepFour from './components/OnboardingStepFour/OnboardingStepFour';
import OnboardingStepOne from './components/OnboardingStepOne/OnboardingStepOne';
import OnboardingStepThree from './components/OnboardingStepThree/OnboardingStepThree';
import OnboardingStepTwo from './components/OnboardingStepTwo/OnboardingStepTwo';
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
        return <OnboardingStepOne handleGoToNextStep={handleGoToNextStep} />;
      case 2:
        return <OnboardingStepTwo handleGoToNextStep={handleGoToNextStep} />;
      case 3:
        return <OnboardingStepThree handleGoToNextStep={handleGoToNextStep} />;
      case 4:
        return (
          <OnboardingStepFour
            handleGoToNextStep={handleGoToNextStep}
            currentStep={currentStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView
      edges={['bottom', 'top']}
      style={styles.container}
    >
      {currentStep > 3 ? (
        <OnboardingStepIndicator
          currentStep={currentStep - 3}
          totalSteps={10}
        />
      ) : null}

      <View style={styles.wrapper}>{renderStep()}</View>
    </SafeAreaView>
  );
}
