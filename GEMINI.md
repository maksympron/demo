# AGENTS.md

## Project Overview

This is an **Expo React Native project using TypeScript, Mapbox, Redux, Redux Toolkit (RTK), and i18n for internationalization**. This document outlines the folder and file conventions for all components in this project. Following these conventions helps maintain a consistent, readable, and maintainable codebase.

---

## 1. General Rules

1. **Every component folder** must contain:

    * The main component file (e.g., `ComponentName.tsx`)
    * An **`interfaces`** folder containing the TypeScript interfaces
    * A **`styles.ts`** file for component-specific styling
    * Optionally, a `components/` folder for subcomponents if the component is complex

2. **Interfaces naming convention**:

    * Each interface should follow this format:

      ```ts
      I<ComponentName>Props
      ```
    * Example: `ISomeScreenProps` for `SomeScreen.tsx`

3. **Folder hierarchy**:

    * Keep components organized under `Screens` or `components` directories
    * Components inside other components should have their own folder if they are complex (multiple files)

4. **Ignore certain folders**:

    * Do **not** include `node_modules`, `ios`, `android`, or `.git` in the folder tree documentation

---

## 2. Example Structure

### Screens

```
SomeScreen/
├── SomeScreen.tsx
├── components/
│   ├── SubComponentA/
│   ├── SubComponentB/
├── interfaces/
│   ├── ISomeScreenProps.ts
└── styles.ts
```

### Components

```
AppText/
├── AppText.tsx
├── interfaces/
│   └── IAppTextProps.ts
└── styles.ts
```

```
Map/
├── Map.tsx
├── components/
│   ├── Compass.tsx
│   └── AdministrativeBoundariesSource.tsx
├── interfaces/
└── styles.ts
```

---

## 3. Redux and RTK

* The project uses **Redux Toolkit (RTK)** for state management.

* Organize slices under `store/slices` with:

    * Slice file: contains the `createSlice` definition
    * Selectors: for accessing state
    * Interfaces (if necessary) for slice payloads

* Keep async thunks or API calls in `store/apis` or inside the slice as appropriate.

* Example:

```
store/
├── slices/
│   ├── auth/
│   │   ├── slice.ts
│   │   ├── selectors.ts
│   │   └── interfaces.ts
│   └── user/
│       ├── slice.ts
│       ├── selectors.ts
│       └── interfaces.ts
├── apis/
└── store.ts
```

* Use custom hooks for convenience:

```ts
const dispatch = useAppDispatch();
const state = useAppSelector(selectCurrentTheme);
```

---

## 4. i18n (Internationalization)

* All text content should use **i18n translation files** under the `i18n` folder.
* Structure example:

```
i18n/
├── en/
│   ├── home.ts
│   ├── login.ts
│   ├── someScreen.ts
│   └── index.ts
├── ua/
│   ├── home.ts
│   ├── login.ts
│   └── index.ts
└── index.ts
```

* Use `useTranslation` hook from `react-i18next` in components:

```ts
const { t } = useTranslation();
<Text>{t('home.welcome')}</Text>
```

---

## 5. Navigation (Expo Router)

* This project uses **Expo Router** for file-system-based routing.

* Navigation between screens should be handled using the `router` object or the `useNavigation` hook from `expo-router`.

* Define screen paths in `constants/AppScreen.ts` to avoid hardcoding strings.

* Usage example:

```ts
import { router } from 'expo-router';
import AppScreen from '@/constants/AppScreen';

router.push(AppScreen.PickSubscription);
```

* To go back, use `navigation.goBack()` or `router.back()`.

---

## 6. Agent Pages (Container Pattern)

* Some screens act as **agents**: they handle data fetching, state management, and business logic, then pass the data to a presentational component in `Screens`.

* Example abstract agent pattern:

```ts
import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks/useApp';
import { useSomeQuery } from '@/store/slices/some/apis/someApi';
import SomeScreen from '@/Screens/SomeScreen/SomeScreen';

export default function SomeAgent() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const { data, isLoading, refetch } = useSomeQuery();

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <SomeScreen
      data={data}
      isLoading={isLoading}
      showModal={showModal}
      onModalOpen={handleModalOpen}
      onModalClose={handleModalClose}
      onRefresh={refetch}
    />
  );
}
```

* Agent pages **do not render UI directly**; they delegate UI to a `Screens` component.

---

## 7. Mapbox Integration

* Use `MapboxGL` components for maps.
* Organize map-related components under `components/Map` or `Screens/*/components`.
* Keep map logic in separate hooks or helpers if complex.

---

## 8. Constants

* Global constants are stored in the `constants/` directory.
* This includes:

    * `Colors.ts`: Theme-aware color palettes.
    * `AppScreen.ts`: Route paths for navigation.
    * `common.ts`: Other shared values like external links.

---

## 9. Utility Libraries

* **`luxon`**: Used for all date and time operations to ensure consistent handling of timezones and formatting. Avoid using the native `Date` object directly.

---
## 10. API Structure (RTK Query)

All API logic must follow this structure:

```
store/
├── apis/
│   ├── wpApi.ts          # Base API
│   ├── userApi.ts
│   ├── mapApi.ts
│   ├── subscriptionApi.ts
│   └── ...
└── slices/
```

### **Base API (`wpApi.ts`)**

Handles:

- base URL (`EXPO_PUBLIC_API_URL`)
- JWT authorization
- global headers

```ts
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.EXPO_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const { jwt } = (getState() as RootState).auth;
    if (jwt) headers.set('authorization', `Bearer ${jwt}`);
    return headers;
  },
});
```

### API Example (`authApi.ts`)

Each API injects endpoints into the base API:

```ts
export const authApi = wpApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: ApiRoutes.login(),
        method: 'POST',
        body,
      }),
    }),
  }),
});
```

RTK Query automatically generates hooks:

```ts
const [login, { isLoading }] = useLoginMutation();
```

### API Routes

All endpoints must be declared in:

```
constants/ApiRoutes.ts
```

This ensures consistent and centralized API management.

---


## 11. Notes for Developers

* Always create `interfaces` and `styles.ts` when adding new components.
* Use **clear, descriptive names** for components and interfaces.
* Keep component folders **self-contained**; all related files (tests, interfaces, styles) should be inside the folder.
* All text should go through i18n for translation.
* Update `AGENTS.md` whenever new top-level components are added.
* For screens using **Redux** or **RTK Query**, use the hooks `useAppDispatch`, `useAppSelector`, and generated API hooks (e.g., `useSomeQuery`) instead of raw `dispatch` or `store.getState`.

---

*End of AGENTS.md*
