import React from 'react';
import { Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';

import { useSession } from '@/context/SessionProvider';
import { LoginSchema, loginSchema } from '@/lib/validations/auth';
import LoginScreen from '@/Screens/LoginScreen/LoginScreen';

export default function Login() {
  const router = useRouter();
  const { signIn } = useSession();

  const {
    control,
    handleSubmit,
    setError,
    formState: { isValid, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginSchema) => {
    Keyboard.dismiss();
    if (values.email === 'admin@admin.com' && values.password === 'admin1234') {
      signIn();
      router.replace('/onboarding');
    } else {
      setError('email', { message: ' ' });
      setError('password', { message: 'Invalid credentials' });
      Toast.show({
        type: 'error',
        text1: 'Invalid credentials',
        text2: 'Please check your email and password.',
      });
    }
  };

  return (
    <>
      <LoginScreen
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        isValid={isValid}
        isSubmitting={isSubmitting}
      />
      <Toast />
    </>
  );
}
