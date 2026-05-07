import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text } from 'react-native';
import RootStackParamList from '../../../navigation/RootStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';

type props = NativeStackScreenProps<RootStackParamList, 'loginscreen'>;

const LoginScreen: React.FC<props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Login Screen</Text>
      <Button title="Go to Dashboard" 
      onPress={()=> navigation.navigate('dashboard')}
      />
    </SafeAreaView>
  );
};
export default LoginScreen;
