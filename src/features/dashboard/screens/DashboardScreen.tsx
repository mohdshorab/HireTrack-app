import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';
import RootStackParamList from '../../../navigation/RootStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';

type props = NativeStackScreenProps<RootStackParamList, 'dashboard'>;

const DashboardScreen: React.FC<props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Dashboard Screen</Text>
      <Button
        title="Go to loginscreen"
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

export default DashboardScreen;
