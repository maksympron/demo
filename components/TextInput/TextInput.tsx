import { Ionicons } from '@expo/vector-icons';
import { Eye, EyeOff } from 'lucide-react-native';
import { forwardRef, useState } from 'react';
import {
  type TextInputProps as BaseTextInputProps,
  TextInput as RNTextInput,
  type TextInput as TextInputType,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from './styles';

interface FormTextInputProps extends BaseTextInputProps {
  label?: string;
  variant?: 'default' | 'outline';
  description?: string;
  error?: string;
  isPassword?: boolean;
  isValid?: boolean;
  isError?: boolean;
  iconColor?: string;
}

const TextInput = forwardRef<TextInputType, FormTextInputProps>(
  (
    {
      label,
      error,
      description,
      variant,
      isPassword,
      isValid,
      isError,
      onFocus,
      onBlur,
      iconColor = '#9ca3af',
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const theme = useAppSelector(selectCurrentTheme);
    const styles = getStyles({ theme });

    const handleFocus: FormTextInputProps['onFocus'] = (e) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur: FormTextInputProps['onBlur'] = (e) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <View style={styles.inputContainer}>
        {label ? (
          <AppText style={[styles.label, variant === 'outline' && styles.outlineLabel]}>
            {label}
          </AppText>
        ) : null}
        <View style={styles.inputWrapper}>
          <RNTextInput
            ref={ref}
            style={[
              styles.input,
              variant === 'outline' && styles.outlineInput,
              isPassword && styles.passwordInput,
              (error || isError) && styles.inputError,
              isValid && styles.inputSuccess,
              isFocused && styles.inputFocused,
            ]}
            placeholderTextColor="rgb(118, 118, 118)"
            secureTextEntry={isPassword ? !showPassword : undefined}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {isPassword ? (
            <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
              <View style={styles.eyeButton}>
                {showPassword ? (
                  <Eye
                    color={iconColor}
                    size={20}
                  />
                ) : (
                  <EyeOff
                    color={iconColor}
                    size={20}
                  />
                )}
              </View>
            </TouchableWithoutFeedback>
          ) : null}
        </View>
        {description ? <AppText style={styles.descriptionText}>{description}</AppText> : null}
        {!description && error ? (
          <View style={styles.error}>
            <Ionicons
              name="alert-circle"
              size={16}
            />
            <AppText style={styles.errorText}>{error}</AppText>
          </View>
        ) : null}
      </View>
    );
  },
);

export default TextInput;
