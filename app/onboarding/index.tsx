import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useSession } from '@/context/SessionProvider';
import OnboardingScreen from '@/Screens/OnboardingScreen/OnboardingScreen';

export default function OnboardingAgent() {
  const router = useRouter();
  const { setOnboarded } = useSession();
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1
  const TOTAL_ONBOARDING_STEPS = 5; // Updated total steps

  const handleGoToNextStep = () => {
    if (currentStep === TOTAL_ONBOARDING_STEPS) {
      setOnboarded(true);
      router.replace('/');
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <OnboardingScreen
      handleGoToNextStep={handleGoToNextStep}
      currentStep={currentStep}
    />
  );
}
