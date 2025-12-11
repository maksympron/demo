import React, { useState } from 'react';
import { View } from 'react-native';
import { useAppSelector } from '@/store/hooks/useApp'; // Import useAppSelector
import selectCurrentTheme from '@/store/slices/theme/selectors'; // Import selectCurrentTheme
import getStyles from '../../styles'; // Corrected import to getStyles
import SubStepEightTravelFrequency from './components/SubStepEightTravelFrequency';
import SubStepFiveCountry from './components/SubStepFiveCountry';
import SubStepFourWeight from './components/SubStepFourWeight';
import SubStepNineChildren from './components/SubStepNineChildren';
// Import all 10 sub-step components
import SubStepOneAboutYou from './components/SubStepOneAboutYou';
import SubStepSevenWorkHours from './components/SubStepSevenWorkHours';
import SubStepSixJobType from './components/SubStepSixJobType';
import SubStepTenPregnancy from './components/SubStepTenPregnancy';
import SubStepThreeHeight from './components/SubStepThreeHeight';
import SubStepTwoAge from './components/SubStepTwoAge';
import type { IOnboardingStepFourProps } from './interfaces/IOnboardingStepFourProps';

const TOTAL_SUB_STEPS = 10;

export default function OnboardingStepFour({ handleGoToNextStep }: IOnboardingStepFourProps) {
  const [currentSubStep, setCurrentSubStep] = useState(1);
  const theme = useAppSelector(selectCurrentTheme); // Get theme
  const onboardingScreenStyles = getStyles({ theme }); // Call getStyles with theme

  const handleGoToNextSubStep = () => {
    if (currentSubStep < TOTAL_SUB_STEPS) {
      setCurrentSubStep((prevSubStep) => prevSubStep + 1);
    } else {
      // All sub-steps completed, call parent's handleGoToNextStep
      handleGoToNextStep();
    }
  };

  const renderSubStep = () => {
    switch (currentSubStep) {
      case 1:
        return <SubStepOneAboutYou handleGoToNextSubStep={handleGoToNextSubStep} />;
      case 2:
        return <SubStepTwoAge handleGoToNextSubStep={handleGoToNextSubStep} />;
      case 3:
        return <SubStepThreeHeight handleGoToNextSubStep={handleGoToNextSubStep} />;
      case 4:
        return <SubStepFourWeight handleGoToNextSubStep={handleGoToNextSubStep} />;
      case 5:
        return <SubStepFiveCountry handleGoToNextSubStep={handleGoToNextSubStep} />;
      case 6:
        return <SubStepSixJobType handleGoToNextSubStep={handleGoToNextSubStep} />;
      case 7:
        return <SubStepSevenWorkHours handleGoToNextSubStep={handleGoToNextSubStep} />;
      case 8:
        return <SubStepEightTravelFrequency handleGoToNextSubStep={handleGoToNextSubStep} />;
      case 9:
        return <SubStepNineChildren handleGoToNextSubStep={handleGoToNextSubStep} />;
      case 10:
        return <SubStepTenPregnancy handleGoToNextSubStep={handleGoToNextSubStep} />;
      default:
        return null;
    }
  };

  return (
    <>
      <View style={{ height: 62 }}></View>
      <>{renderSubStep()}</>
    </>
  );
}
