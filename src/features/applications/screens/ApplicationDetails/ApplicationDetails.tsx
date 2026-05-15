import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, StatusBadge } from '../../../../components';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '../../../../navigation/RootStackParamList';
import { useAppSelector } from '../../../../store';
import { getApplicationById } from '../../slices/applicationSelectors';
import styles from './ApplicationDetails.styles';

type ApplicationDetailsProps = NativeStackScreenProps<RootStackParamList, 'applicationDetails'>;

const ApplicationDetails: React.FC<ApplicationDetailsProps> = ({ navigation, route }) => {
  const { applicationId } = route.params;
  const selectedApplication = useAppSelector(state => getApplicationById(state, applicationId));
  const isApplicationValid = Object.keys(selectedApplication).length !== 0;

  return (
    <SafeAreaView style={styles.parent}>
      <Header
        canGoBack
        title={isApplicationValid ? selectedApplication?.companyName : 'Application'}
        navigation={navigation}
      />
      {isApplicationValid ? (
        <View>
          <View style={styles.rowSpaced}>
            <View style={styles.row}>
              <Text style={styles.role}>
                {selectedApplication?.role}
                {' • '}
              </Text>
              <Text style={styles.role}>{selectedApplication?.location}</Text>
            </View>
            <StatusBadge status={selectedApplication?.status} />
          </View>
        </View>
      ) : (
        <Text style={styles.emptyText}>No data found.</Text>
      )}
    </SafeAreaView>
  );
};

export default ApplicationDetails;
