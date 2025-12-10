import './mocks';

import type { RenderOptions } from '@testing-library/react-native';
import { render as rtlRender, renderHook as rtlRenderHook } from '@testing-library/react-native';
import type { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/store/store';
import type { AppStore } from '@/store/types/TStore';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: AppStore;
  // biome-ignore lint/suspicious/noExplicitAny: <no reason>
  preloadedState?: any;
}

function Wrapper({ children, store }: PropsWithChildren<{ store: AppStore }>): ReactElement {
  return <Provider store={store}>{children}</Provider>;
}

export function render(
  ui: React.ReactElement,
  {
    preloadedState,
    store = makeStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  return {
    store,
    ...rtlRender(ui, {
      wrapper: ({ children }) => <Wrapper store={store}>{children}</Wrapper>,
      ...renderOptions,
    }),
  };
}

export function renderHook<Response, Params>(
  hook: (args: Params) => Response,
  {
    preloadedState,
    store = makeStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  return rtlRenderHook(hook, {
    wrapper: ({ children }) => <Wrapper store={store}>{children}</Wrapper>,
    ...renderOptions,
  });
}
