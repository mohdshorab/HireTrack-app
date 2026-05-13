import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '../../../navigation/RootStackParamList';
import FormInput from '../../../components/inputs/FormInput';
import Header from '../../../components/header/Header';
import { saveApplication } from '../../../services/storage';
import { ApplicationItem } from '../../../types/application';
import { styles } from './AddApplicationScreen.styles';
import StatusOptionModal from '../components/StatusOptionModal';
import AppCalendarModal from '../../../components/calendar/AppCalendarModal';

type Props = NativeStackScreenProps<RootStackParamList, 'addApplication'>;

const AddApplicationScreen: React.FC<Props> = ({ navigation }) => {
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [jdLink, setJdLink] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const handleSave = () => {
    const newErrors: Record<string, string> = {};

    if (!companyName.trim()) newErrors.companyName = "Company Name can't be empty";
    if (!role.trim()) newErrors.role = "Role can't be empty";
    if (!location.trim()) newErrors.location = "Location can't be empty";
    if (!salary.trim()) newErrors.salary = "Salary can't be empty";
    if (!status) newErrors.status = "Status can't be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const newApp: ApplicationItem = {
      id: Date.now().toString(),
      companyName: companyName.trim(),
      role: role.trim(),
      location: location.trim(),
      salary: salary.trim(),
      jdLink: jdLink.trim(),
      status,
      appliedOn: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      rounds: [],
    };

    saveApplication(newApp);
    navigation.goBack();
  };

  const onPressOption = (option: string) => {
    setStatus(option);
    if (errors.status) setErrors({ ...errors, status: '' });
  };

  const onClose = () => setShowModal(false);

  const getSelectedDate = (date: string) => setDate(date);
  const onCloseCalendar = () => setShowCalendarModal(false);

  return (
    <SafeAreaView style={styles.parent}>
      <Header title="Add Application" canGoBack navigation={navigation} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <FormInput
            label="Company Name"
            value={companyName}
            onChangeText={text => {
              setCompanyName(text);
              if (errors.companyName) setErrors({ ...errors, companyName: '' });
            }}
            placeholder="e.g. Zepto"
            errorMessage={errors.companyName}
          />

          <FormInput
            label="Role"
            value={role}
            onChangeText={text => {
              setRole(text);
              if (errors.role) setErrors({ ...errors, role: '' });
            }}
            placeholder="e.g. Frontend Developer"
            errorMessage={errors.role}
          />

          <FormInput
            label="Location"
            value={location}
            onChangeText={text => {
              setLocation(text);
              if (errors.location) setErrors({ ...errors, location: '' });
            }}
            placeholder="e.g. Bengaluru"
            errorMessage={errors.location}
          />

          <FormInput
            label="Salary"
            value={salary}
            onChangeText={text => {
              setSalary(text);
              if (errors.salary) setErrors({ ...errors, salary: '' });
            }}
            placeholder="e.g. ₹14 LPA"
            errorMessage={errors.salary}
          />

          <FormInput
            label="JD Link"
            value={jdLink}
            onChangeText={setJdLink}
            placeholder="Paste LinkedIn / Naukri URL"
          />

          <FormInput
            label="Status"
            value={status}
            placeholder="Select Status"
            onPress={() => setShowModal(true)}
            rightIcon={<Text style={styles.dropdownIcon}>▼</Text>}
            errorMessage={errors.status}
          />

          <FormInput
            label="Follow Up Date"
            value={date}
            placeholder="Select date"
            onPress={() => setShowCalendarModal(true)}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.primaryButton} onPress={handleSave}>
              <Text style={styles.primaryButtonText}>Save Application</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <AppCalendarModal showCalendar={showCalendarModal} getSelectedDate={getSelectedDate} onClose={onCloseCalendar}/>
      <StatusOptionModal showModal={showModal} onClose={onClose} onPressOption={onPressOption} />
    </SafeAreaView>
  );
};

export default AddApplicationScreen;
