import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import CountryPicker, { type Country } from 'react-native-country-picker-modal';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';

export default function SubStepFiveCountry({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });
  const [country, setCountry] = useState<Country | null>(null);

  const onSelectCountry = (selectedCountry: Country) => {
    setCountry(selectedCountry);
  };

  return (
    <>
      <View style={[onboardingScreenStyles.centerBlock, { alignItems: 'stretch' }]}>
        <AppText style={onboardingScreenStyles.title}>What country are you from?</AppText>
        <CountryPicker
          withCountryNameButton
          countryCode={country?.cca2}
          onSelect={onSelectCountry}
          containerButtonStyle={{
            borderWidth: 1,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 12,
            marginTop: 20,
            width: '100%', // make full width
          }}
        />
      </View>

      <Pressable
        style={onboardingScreenStyles.continueButton}
        onPress={handleGoToNextSubStep}
      >
        <AppText style={onboardingScreenStyles.continueButtonText}>Next</AppText>
      </Pressable>
    </>
  );
}
