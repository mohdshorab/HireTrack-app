import { StyleSheet } from 'react-native';
import { Colors, Spacing, Radius } from '../../../../themes';
import { s, vs, ms } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: s(Spacing.screenPadH),
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: vs(Spacing.md),
    paddingBottom: vs(Spacing.xxl * 2),
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  buttonContainer: {
    gap: vs(Spacing.md),
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
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
