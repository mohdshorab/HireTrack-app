import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View, ScrollView } from 'react-native';
import RootStackParamList from '../../../../navigation/RootStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, IonicIcon } from '../../../../components';
import ApplicationStats from '../../components/ApplicationStats/ApplicationStats';
import ApplicationCard from '../../components/ApplicationCard/ApplicationCard';
import { styles } from './DashboardScreen.styles';
import { useAppSelector } from '../../../../store';
import { Colors } from '../../../../themes';

type props = NativeStackScreenProps<RootStackParamList, 'dashboard'>;

const DashboardScreen: React.FC<props> = ({ navigation }) => {
  const applications = useAppSelector(state => state.Application.applications);

  const appliedCount = applications.filter(a => a.status.toUpperCase() === 'APPLIED').length;
  const activeCount = applications.filter(a =>
    ['INTERVIEW', 'SHORTLISTED'].includes(a.status.toUpperCase()),
  ).length;
  const rejectedCount = applications.filter(a => a.status.toUpperCase() === 'REJECTED').length;

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
      {applications.length === 0 ? (
        <View style={styles.fallbackContainer}>
          <View style={styles.fallbackIconContainer}>
            <IonicIcon iconName="briefcase-outline" size={48} color={Colors.textSecondary} />
          </View>
          <Text style={styles.fallbackTitle}>No Applications Yet</Text>
          <Text style={styles.fallbackSubtitle}>
            Add job applications you've submitted or are preparing for using the button below.
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.applicationsContainer}>
          {applications.map(item => (
            <ApplicationCard key={item.id} item={item} navigation={navigation} />
          ))}
        </ScrollView>
      )}
      <View>
        <IonicIcon
          iconName="add-outline"
          size={28}
          onPress={() => navigation.navigate('manageApplication')}
          style={styles.fab}
        />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
