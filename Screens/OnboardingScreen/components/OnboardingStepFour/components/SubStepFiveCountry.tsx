import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';
import CountryPicker, { type Country } from 'react-native-country-picker-modal';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';
import getSubStepStyles from './styles';

export default function SubStepFiveCountry({
  handleGoToNextSubStep,
}: IOnboardingStepFourSubStepProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });
  const subStepStyles = getSubStepStyles({ theme });
  const [country, setCountry] = useState<Country | null>(null);

  const onSelectCountry = (selectedCountry: Country) => {
    setCountry(selectedCountry);
  };

  return (
    <>
      <View style={[onboardingScreenStyles.centerBlock, onboardingScreenStyles.stretch]}>
        <AppText style={onboardingScreenStyles.title}>{t('onboarding.countryTitle')}</AppText>
        <CountryPicker
          withCountryNameButton
          countryCode={country?.cca2}
          onSelect={onSelectCountry}
          containerButtonStyle={subStepStyles.countryPickerButton}
        />
      </View>

      <Pressable
        style={onboardingScreenStyles.continueButton}
        onPress={handleGoToNextSubStep}
      >
        <AppText style={onboardingScreenStyles.continueButtonText}>{t('onboarding.next')}</AppText>
      </Pressable>
    </>
  );
}
