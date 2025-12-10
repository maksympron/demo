import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import type { NativeSyntheticEvent, TextInputEndEditingEventData } from 'react-native';
import { Keyboard, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '@/components/AppText/AppText';
import TextInput from '@/components/TextInput/TextInput';
import type { ILoginScreenProps } from '@/Screens/LoginScreen/interfaces/ILoginScreenProps';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from './styles';

export default function LoginScreen({
  control,
  onSubmit,
  isValid,
  isSubmitting,
}: ILoginScreenProps) {
  const { t } = useTranslation();
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <SafeAreaView
        edges={['bottom', 'top']}
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.main}>
            <View style={styles.header}>
              <AppText style={styles.title}>{t('login.pageTitle')}</AppText>
              <AppText style={styles.subtitle}>{t('login.subtitle')}</AppText>
            </View>

            <View style={styles.form}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
                  <TextInput
                    label={'Email*'}
                    placeholder={t('login.emailAddress')}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    error={error?.message}
                    defaultValue={value}
                    onEndEditing={(e: NativeSyntheticEvent<TextInputEndEditingEventData>) =>
                      onChange(e.nativeEvent.text)
                    }
                    onBlur={onBlur}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
                  <TextInput
                    label={'Password*'}
                    placeholder={t('login.password')}
                    autoComplete="password"
                    error={error?.message}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    isPassword
                  />
                )}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <Pressable
              style={[styles.loginButton, isValid && styles.loginButtonActive]}
              onPress={onSubmit}
              disabled={isSubmitting}
            >
              <AppText style={[styles.loginButtonText]}>
                {t(isSubmitting ? 'login.loggingIn' : 'login.login')}
              </AppText>
            </Pressable>

            <View style={styles.signup}>
              <Text style={styles.signupText}>Dont have an account? </Text>
              <Pressable>
                <Text style={styles.signupButton}>Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
