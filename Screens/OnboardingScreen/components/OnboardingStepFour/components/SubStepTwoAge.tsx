import { Keyboard, Pressable, View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import TextInput from '@/components/TextInput/TextInput';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from '../../../styles';
import type { IOnboardingStepFourSubStepProps } from '../interfaces/IOnboardingStepFourSubStepProps';

export default function SubStepTwoAge({ handleGoToNextSubStep }: IOnboardingStepFourSubStepProps) {
  const theme = useAppSelector(selectCurrentTheme);
  const onboardingScreenStyles = getStyles({ theme });

  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
    >
      <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ height: 52 }}></View>
        <View style={onboardingScreenStyles.centerBlock}>
          <AppText style={onboardingScreenStyles.title}>What is your age?</AppText>
          <TextInput
            placeholder="Enter age"
            keyboardType="numeric"
            style={{
              width: '100%',
              borderBottomWidth: 2,
              fontSize: 24,
              paddingVertical: 12,
              textAlign: 'center',
              fontFamily: 'AlbertRegular',
            }}
          />
        </View>

        <Pressable
          style={[onboardingScreenStyles.continueButton]}
          onPress={handleGoToNextSubStep}
        >
          <AppText style={[onboardingScreenStyles.continueButtonText]}>Continue</AppText>
        </Pressable>
      </View>
    </Pressable>
  );
}
