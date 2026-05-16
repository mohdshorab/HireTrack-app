import { useState, FC } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '../../../../navigation/RootStackParamList';
import { FormInput, Header, CalendarModal, IonicIcon, Accordion } from '../../../../components';
import { ApplicationItem } from '../../../../types/application';
import { styles } from './AddApplicationScreen.styles';
import StatusOptionModal from '../../components/StatusOptionModal';
import { ms } from '../../../../utils/responsive';
import { getCurrentDate } from '../../../../utils/dateHelpers';
import InfoModal from '../../components/infoModal/InfoModal';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../../../store';
import { addApplication } from '../../slices/applicationSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'addApplication'>;
const MODALS = {
  APPLIED: 'APPLIED',
  FOLLOWUP: 'FOLLOWUP',
  NONE: null,
};
const AddApplicationScreen: FC<Props> = ({ navigation }) => {
  const [applicationForm, setApplicationForm] = useState<Record<string, string>>({
    companyName: '',
    role: '',
    location: '',
    salary: '',
    jdLink: '',
    status: '',
    appliedOnDate: '',
    followUpDate: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(MODALS.NONE);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [showAccordion, setShowAccordion] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSave = () => {
    const newErrors: Record<string, string> = {};

    if (!applicationForm.companyName.trim()) newErrors.companyName = "Company Name can't be empty";
    if (!applicationForm.role.trim()) newErrors.role = "Role can't be empty";
    if (!applicationForm.location.trim()) newErrors.location = "Location can't be empty";
    if (!applicationForm.status) newErrors.status = "Status can't be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const newApp: ApplicationItem = {
      id: nanoid(),
      companyName: applicationForm.companyName.trim(),
      role: applicationForm.role.trim(),
      location: applicationForm.location.trim(),
      salary: applicationForm.salary?.trim() || null,
      jdLink: applicationForm.jdLink?.trim() || null,
      status: applicationForm.status,
      appliedOn: applicationForm.appliedOnDate ?? new Date().toISOString(),
      followUpDate: applicationForm.followUpDate ?? null,
      notes: applicationForm.notes?.trim() || null,
      rounds: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    dispatch(addApplication(newApp));
    navigation.goBack();
  };

  const onPressOption = (option: string) => {
    handleApplicationForm('status', option);
    if (errors.status) setErrors({ ...errors, status: '' });
  };

  const onClose = () => setShowModal(false);

  const getAppliedOnDate = (date: string) => handleApplicationForm('appliedOnDate', date);
  const getFollowUpDate = (date: string) => handleApplicationForm('followUpDate', date);
  const onCloseCalendar = () => setActiveModal(MODALS.NONE);

  const handleApplicationForm = (key: string, value: string) => {
    setApplicationForm(prev => ({ ...prev, [key]: value }));
  };

  const onCloseInfoModal = () => setShowInfoModal(false);

  return (
    <SafeAreaView style={styles.parent}>
      <Header title="Add Application" canGoBack navigation={navigation} />

      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <FormInput
            label="Company Name"
            value={applicationForm.companyName}
            onChangeText={text => {
              handleApplicationForm('companyName', text);
              if (errors.companyName) setErrors({ ...errors, companyName: '' });
            }}
            placeholder="e.g. Zepto"
            errorMessage={errors.companyName}
            required
          />

          <FormInput
            label="Role"
            value={applicationForm.role}
            onChangeText={text => {
              handleApplicationForm('role', text);
              if (errors.role) setErrors({ ...errors, role: '' });
            }}
            placeholder="e.g. Frontend Developer"
            errorMessage={errors.role}
            required
          />

          <FormInput
            label="Location"
            value={applicationForm.location}
            onChangeText={text => {
              handleApplicationForm('location', text);
              if (errors.location) setErrors({ ...errors, location: '' });
            }}
            placeholder="e.g. Bengaluru"
            errorMessage={errors.location}
            required
          />

          <FormInput
            label="Status"
            value={applicationForm.status}
            placeholder="Select Status"
            onPress={() => {
              setShowModal(true);
            }}
            rightIcon={<IonicIcon iconName="caret-down-outline" size={ms(12)} />}
            errorMessage={errors.status}
            required
          />
          <Accordion
            isExpanded={showAccordion}
            onToggle={setShowAccordion}
            title="Add more details">
            <>
              <FormInput
                label="Salary"
                value={applicationForm.salary}
                onChangeText={text => {
                  handleApplicationForm('salary', text);
                  if (errors.salary) setErrors({ ...errors, salary: '' });
                }}
                placeholder="e.g. ₹14 LPA"
                errorMessage={errors.salary}
              />

              <FormInput
                label="JD Link"
                value={applicationForm.jdLink}
                onChangeText={text => {
                  handleApplicationForm('jdLink', text);
                }}
                placeholder="Paste LinkedIn / Naukri URL"
              />

              <FormInput
                label="Applied On"
                value={applicationForm.appliedOnDate}
                placeholder="Select date"
                onPress={() => setActiveModal(MODALS.APPLIED)}
              />

              <FormInput
                label="Follow Up"
                labelIcon={
                  <IonicIcon
                    onPress={() => setShowInfoModal(true)}
                    iconName="information-circle-outline"
                    size={ms(14)}
                  />
                }
                value={applicationForm.followUpDate}
                placeholder="Select date"
                onPress={() => setActiveModal(MODALS.FOLLOWUP)}
              />
            </>
          </Accordion>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleSave}>
            <Text style={styles.primaryButtonText}>Save Application</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {activeModal === MODALS.APPLIED && (
        <CalendarModal
          getSelectedDate={getAppliedOnDate}
          onClose={onCloseCalendar}
          selectedDate={applicationForm.appliedOnDate}
        />
      )}

      {activeModal === MODALS.FOLLOWUP && (
        <CalendarModal
          getSelectedDate={getFollowUpDate}
          onClose={onCloseCalendar}
          selectedDate={applicationForm.followUpDate}
          minDate={getCurrentDate()}
        />
      )}

      <InfoModal
        onClose={onCloseInfoModal}
        context="Set a date to be reminded to contact this lead/applicant again."
        showModal={showInfoModal}
      />
      <StatusOptionModal showModal={showModal} onClose={onClose} onPressOption={onPressOption} />
    </SafeAreaView>
  );
};

export default AddApplicationScreen;
