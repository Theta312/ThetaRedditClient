'use client';
import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';
import { setupListeners } from '@reduxjs/toolkit/query';

export function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }
    useEffect(() => {
        if (storeRef.current != null) {
          const unsubscribe = setupListeners(storeRef.current.dispatch);
          return unsubscribe;
        }
      }, []);

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}