import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LoginScreen from '../features/auth/screens/LoginScreen';
import DashboardScreen from '../features/dashboard/screens/DashboardScreen';
import RootStackParamList from './RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false,
        }}
        initialRouteName="loginscreen"
      >
        <Stack.Screen name="loginscreen" component={LoginScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;