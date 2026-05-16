import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View, ScrollView } from 'react-native';
import RootStackParamList from '../../../../navigation/RootStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, IonicIcon } from '../../../../components';
import ApplicationStats from '../../components/ApplicationStats/ApplicationStats';
import ApplicationCard from '../../components/ApplicationCard/ApplicationCard';
import { styles } from './DashboardScreen.styles';
import { useAppSelector } from '../../../../store';

type props = NativeStackScreenProps<RootStackParamList, 'dashboard'>;

const DashboardScreen: React.FC<props> = ({ navigation }) => {
  const applications = useAppSelector(state => state.Application.applications);

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
        <ApplicationStats items={statusData} />
      </View>
      <Text style={styles.sectionTitle}>Recent Applications</Text>
      <ScrollView style={styles.applicationsContainer}>
        {applications.map(item => (
          <ApplicationCard key={item.id} item={item} navigation={navigation} />
        ))}
        {applications.length === 0 && <Text style={styles.emptyText}>No applications yet.</Text>}
      </ScrollView>
      <View>
        <IonicIcon
          iconName="add-outline"
          size={28}
          onPress={() => navigation.navigate('addApplication')}
          style={styles.fab}
        />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
