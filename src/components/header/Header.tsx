import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import IonicIcon from '../ionicIcon/IonicIcon';
import { NavigationProp } from '@react-navigation/native';
import RootStackParamList from '../../navigation/RootStackParamList';
import { styles } from './Header.styles';

type HeaderProps = {
  navigation: NavigationProp<RootStackParamList>;
  canGoBack?: boolean;
  showTimestamp?: boolean;
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ title, canGoBack, showTimestamp, navigation }) => {
  const onPressBack = () => {
    navigation.canGoBack() ? navigation.goBack() : navigation.navigate('dashboard');
  };

  return (
    <View style={styles.container}>
      {canGoBack && (
        <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
          <IonicIcon iconName="chevron-back-outline" size={18} />
          <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.titleText}>{title}</Text>
        {showTimestamp && (
          <Text style={styles.date}>
            {`${new Date().toLocaleString('en-US', { weekday: 'long' })}, ${new Date().getDate()} ${new Date().toLocaleString('en-US', { month: 'long' })}, ${new Date().getFullYear()}`}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Header;
