import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import Router from './src/Router'
import { Provider } from 'react-redux';
import initializeStore, { StoreType } from './store';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const App: React.FC = () => {
  const [resolvedStore, setResolvedStore] = useState<StoreType | null>(null);
  useEffect(() => {
    const resolveStore = async () => {
      const storeInstance = await initializeStore();
      setResolvedStore(storeInstance);
    };

    resolveStore();
  }, []);


  if (!resolvedStore) {
    // Return null or an empty component while the store is being resolved
    return null;
  }

  return (
    <Provider store={resolvedStore}>
      <Router />
    </Provider>
  );
}

export default App