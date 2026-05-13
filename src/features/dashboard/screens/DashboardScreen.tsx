import React, { useState, useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import RootStackParamList from '../../../navigation/RootStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import StateLabel from '../components/StateLabel';
import StatusBadges from '../../../components/statusBadges/StatusBadges';
import ApplicationCard from '../components/ApplicationCard';
import IonicIcon from '../../../components/ionicIcon/IonicIcon';
import { getApplications } from '../../../services/storage';
import { ApplicationItem } from '../../../types/application';
import { styles } from './DashboardScreen.styles';

type props = NativeStackScreenProps<RootStackParamList, 'dashboard'>;

const DashboardScreen: React.FC<props> = ({ navigation }) => {
  const [applications, setApplications] = useState<ApplicationItem[]>([]);

  useFocusEffect(
    useCallback(() => {
      const data = getApplications();
      setApplications(data);
    }, []),
  );

  const appliedCount = applications.filter(a => a.status === 'Applied').length;
  const activeCount = applications.filter(a =>
    ['Interview', 'Shortlisted'].includes(a.status),
  ).length;
  const rejectedCount = applications.filter(a => a.status === 'Rejected').length;

  const statusData = [
    { id: 1, status: 'applied', count: appliedCount },
    { id: 2, status: 'active', count: activeCount },
    { id: 3, status: 'rejected', count: rejectedCount },
  ];

  return (
    <SafeAreaView style={styles.parent}>
      <Header title="Dashboard" showTimestamp navigation={navigation} />
      <View style={styles.statsContainer}>
        <StateLabel items={statusData} />
      </View>
      <Text style={styles.sectionTitle}>Recent Applications</Text>
      <View style={styles.applicationsContainer}>
        {applications.slice(0, 2).map(item => (
          <ApplicationCard key={item.id} item={item} />
        ))}
        {applications.length === 0 && <Text style={styles.emptyText}>No applications yet.</Text>}
      </View>
      {applications.length !== 0 && <Text style={styles.seeAllText}>See All</Text>}
      <StatusBadges />
      <IonicIcon
        iconName="add-outline"
        size={28}
        onPress={() => navigation.navigate('addApplication')}
        style={styles.fab}
      />
    </SafeAreaView>
  );
};

export default DashboardScreen;
