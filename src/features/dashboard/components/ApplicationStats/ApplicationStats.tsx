import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../../../themes';
import { styles } from './ApplicationStats.styles';

type Item = {
  id: number;
  status: string;
  count: number;
};

type ApplicationStatsProps = {
  items: Item[];
};

const ApplicationStats: React.FC<ApplicationStatsProps> = ({ items }) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'applied':
        return { color: Colors.textPrimary };
      case 'active':
        return { color: Colors.success };
      case 'rejected':
        return { color: Colors.danger };
      default:
        return { color: Colors.textSecondary };
    }
  };

  return (
    <View style={styles.container}>
      {items.map(item => (
        <View key={item.id} style={styles.badge}>
          <Text style={[styles.count, getStatusStyle(item.status)]}>{item.count}</Text>
          <Text style={styles.text}>{item.status}</Text>
        </View>
      ))}
    </View>
  );
};

export default ApplicationStats;
