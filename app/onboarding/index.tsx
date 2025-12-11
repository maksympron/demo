import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useSession } from '@/context/SessionProvider';
import OnboardingScreen from '@/Screens/OnboardingScreen/OnboardingScreen';

export default function OnboardingAgent() {
  const router = useRouter();
  const { setOnboarded } = useSession();
  const [currentStep, setCurrentStep] = useState(1);

  const handleGoToNextStep = () => {
    if (currentStep === 4) {
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
