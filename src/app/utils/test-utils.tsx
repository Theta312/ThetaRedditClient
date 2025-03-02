import React, {PropsWithChildren, JSX} from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeStore } from '../../lib/store';
import type {AppStore, RootState} from '../../lib/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>
    store?: AppStore
  };

  export function renderWithProviders(
    ui: React.ReactElement,
    {
      preloadedState = {},
      // Automatically create a store instance if no store was passed in
      store = makeStore(preloadedState),
      ...renderOptions
    }: ExtendedRenderOptions = {}
  ) {
    function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
      return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
  }