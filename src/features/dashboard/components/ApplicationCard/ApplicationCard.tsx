import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../../../themes';
import { ApplicationItem } from '../../../../types/application';
import { styles } from './ApplicationCard.styles';
import { NavigationProp } from '@react-navigation/native';
import RootStackParamList from '../../../../navigation/RootStackParamList';
import { StatusBadge } from '../../../../components';

type ApplicationCardProps = {
  item: ApplicationItem;
  navigation: NavigationProp<RootStackParamList>;
};

const getStatusStyle = (status: string) => {
  const normalized = status.toLowerCase();
  const key = (normalized === 'active' ? 'interview' : normalized) as keyof typeof Colors.badge;
  const theme = Colors.badge[key];

  return theme
    ? { color: theme.text, backgroundColor: theme.bg, borderColor: theme.border }
    : { color: Colors.textSecondary, backgroundColor: Colors.border, borderColor: Colors.border };
};

const ApplicationCard: React.FC<ApplicationCardProps> = ({ item, navigation }) => {
  const currentRoundName =
    item.rounds && item.rounds.length > 0 ? item.rounds[item.rounds.length - 1].name : 'Applied';

  const onPressCard = () => {
    if (navigation) {
      navigation.navigate('applicationDetails', { applicationId: item.id });
    }
  };

  return (
    <TouchableOpacity onPress={onPressCard} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.companyName}>{item.companyName}</Text>
          <Text style={styles.position}>{item.role}</Text>
        </View>
        <StatusBadge status={item?.status} />
      </View>
      <View style={styles.divider} />
      <View style={styles.footer}>
        <Text style={styles.appliedOn}>{item.appliedOn}</Text>
        <Text style={styles.currentRound}>{currentRoundName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ApplicationCard;
