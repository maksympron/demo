import 'react-native-reanimated';

import * as Sentry from '@sentry/react-native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider, useSession } from '@/context/SessionProvider';
import { persistor, store } from '@/store/store';

const InterRegular = require('../assets/fonts/Inter-Regular.ttf');
const UbuntuRegular = require('../assets/fonts/Ubuntu-Regular.ttf');

const AlbertRegular = require('../assets/fonts/AlbertSans-Regular.ttf');
const AlbertBold = require('../assets/fonts/AlbertSans-Bold.ttf');
const AlbertLight = require('../assets/fonts/AlbertSans-Light.ttf');
const AlbertMedium = require('../assets/fonts/AlbertSans-Medium.ttf');
const AlbertSemiBold = require('../assets/fonts/AlbertSans-SemiBold.ttf');

SplashScreen.preventAutoHideAsync();

Sentry.init({
  enabled: !!process.env.EXPO_PUBLIC_SENTRY_DSN,
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});

function RootLayout() {
  const [loaded] = useFonts({
    InterRegular,
    UbuntuRegular,
    AlbertRegular,
    AlbertBold,
    AlbertLight,
    AlbertMedium,
    AlbertSemiBold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <SessionProvider>
          <Slot />
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}

function Slot() {
  const { session, isLoading, onboarded } = useSession();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const inAuthGroup = segments[0] === '(auth)';

    if (!session && !inAuthGroup) {
      router.replace('/(auth)/login');
    } else if (session && inAuthGroup) {
      if (!onboarded) {
        router.replace('/onboarding');
      } else {
        router.replace('/(tabs)');
      }
    }
  }, [session, isLoading, segments, router, onboarded]);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="onboarding/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default Sentry.wrap(RootLayout);
