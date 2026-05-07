import React, { useEffect } from 'react';
import { StatusBar, Text, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import BootSplash from "react-native-bootsplash";

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

useEffect(() => {
  BootSplash.hide({ fade: true });
}, []);

  return (
    <SafeAreaProvider>
      <AppNavigator/>
    </SafeAreaProvider>
  );
};

export default App;
