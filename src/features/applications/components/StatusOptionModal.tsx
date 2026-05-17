import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors, Spacing, Radius } from '../../../themes';
import { s, vs, ms } from 'react-native-size-matters';

type StatusOptionModalProps = {
  showModal: boolean;
  onClose: () => void;
  onPressOption: (option: string) => void;
};
const STATUS_OPTIONS = ['Applied', 'Interview', 'Rejected', 'Offer', 'Shortlisted'];

const StatusOptionModal: React.FC<StatusOptionModalProps> = ({ showModal, onClose, onPressOption }) => {
  console.log(showModal,onClose,onPressOption)
  return (
    <Modal visible={showModal} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose}>
        <View style={styles.modalContent}>
          {STATUS_OPTIONS.map((option, index) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.modalOption,
                index === STATUS_OPTIONS.length - 1 && { borderBottomWidth: 0 },
              ]}
              onPress={() => {
                onPressOption(option);
                onClose();
              }}>
              <Text style={styles.modalOptionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: s(Spacing.xl),
  },
  modalContent: {
    backgroundColor: Colors.surface,
    borderRadius: ms(Radius.sm),
    borderWidth: 1,
    borderColor: Colors.border,
  },
  modalOption: {
    paddingVertical: vs(Spacing.md),
    paddingHorizontal: s(Spacing.lg),
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border,
  },
  modalOptionText: {
    color: Colors.textPrimary,
    fontSize: ms(16),
    fontWeight: '500',
  },
});

export default StatusOptionModal;
