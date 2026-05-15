import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../features/auth/screens/LoginScreen';
import DashboardScreen from '../features/dashboard/screens/DashboardScreen/DashboardScreen';
import AddApplicationScreen from '../features/applications/screens/AddApplicationScreen/AddApplicationScreen';
import RootStackParamList from './RootStackParamList';
import ApplicationDetails from '../features/applications/screens/ApplicationDetails/ApplicationDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="dashboard">
        <Stack.Screen name="loginscreen" component={LoginScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
        <Stack.Screen name="addApplication" component={AddApplicationScreen} />
        <Stack.Screen name="applicationDetails" component={ApplicationDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
