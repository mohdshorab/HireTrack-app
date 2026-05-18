import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { useAppDispatch } from './src/store';
import { setApplications } from './src/features/applications/slices/applicationSlice';

const MainScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setApplications());
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default MainScreen;
